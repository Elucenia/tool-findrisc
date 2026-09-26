/* tool-findrisc · Elucenia · https://github.com/Elucenia/tool-findrisc
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"findrisc","title":"FINDRISC","fields":[["idade","Idade","radio",{"opts":{"0":"&lt; 45 anos","2":"45 a 54","3":"55 a 64","4":"&gt; 64"}}],["imc","IMC","radio",{"opts":{"0":"&lt; 25 kg/m²","1":"25 a 30","3":"&gt; 30"}}],["cintura","Circunferência abdominal","sel",{"opts":{"0":"Homem &lt; 94 cm · mulher &lt; 80 cm","3":"Homem 94 a 102 cm · mulher 80 a 88 cm","4":"Homem &gt; 102 cm · mulher &gt; 88 cm"}}],["ativ","Faz ao menos 30 minutos de atividade física por dia (trabalho ou lazer)?","radio",{"opts":{"0":"Sim","2":"Não"}}],["veg","Com que frequência come verduras, legumes ou frutas?","radio",{"opts":{"0":"Todos os dias","1":"Não todos os dias"}}],["antihip","Já usou regularmente remédio para pressão alta?","radio",{"opts":{"0":"Não","2":"Sim"}}],["glic","Já teve glicemia alta (em exame, doença ou gestação)?","radio",{"opts":{"0":"Não","5":"Sim"}}],["familia","Familiares com diabetes (tipo 1 ou 2)","sel",{"opts":{"0":"Não","3":"Sim: avós, tios ou primos de primeiro grau","5":"Sim: pais, irmãos ou filhos"}}]],"config":{"unit":"","label":"FINDRISC","fields":[["idade","radio",0],["imc","radio",0],["cintura","sel",0],["ativ","radio",0],["veg","radio",0],["antihip","radio",0],["glic","radio",0],["familia","sel",0]],"bands":[[0,"low","Risco baixo: cerca de 1 em 100 desenvolverá diabetes em 10 anos"],[7,"low","Risco levemente elevado: cerca de 1 em 25 em 10 anos","Orientar alimentação e atividade física."],[12,"mid","Risco moderado: cerca de 1 em 6 em 10 anos","Considerar glicemia de jejum ou HbA1c e mudança intensiva do estilo de vida."],[15,"high","Risco alto: cerca de 1 em 3 em 10 anos","Dosar glicemia de jejum/HbA1c (ou TOTG) e intervir no estilo de vida."],[21,"high","Risco muito alto: cerca de 1 em 2 em 10 anos","Investigar diabetes não diagnosticado."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
