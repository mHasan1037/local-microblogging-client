import{r}from"./index-acfe17ae.js";const n=r.createContext({});function o(t,e){return e?e.evalFeature(t):{value:null,on:!1,off:!0,source:"unknownFeature",ruleId:""}}function i(t){const e=a();return o(t,e)}function a(){const{growthbook:t}=r.useContext(n);return t}const l=({children:t,growthbook:e})=>{const[c,u]=r.useState(0);return r.useEffect(()=>{if(!(!e||!e.setRenderer))return e.setRenderer(()=>{u(s=>s+1)}),()=>{e.setRenderer(()=>{})}},[e]),r.createElement(n.Provider,{value:{growthbook:e}},t)};export{l as G,i as u};
