import{r as t,j as e}from"./index-Cl2RFo67.js";import{j as h,R as p,E as u}from"./index-Bq7FgSu6.js";import{S as o}from"./select-DMYHHEKe.js";const a=[{id:-1,name:"全部"},{id:0,name:"未发布"}],b=()=>{const i=t.useRef(null),[d,l]=t.useState(""),[n,c]=t.useState(1),[m,x]=t.useState(0),r=s=>{c(s)},g=t.useCallback(s=>{i.current&&(l(s),i.current&&(i.current.innerHTML=h(s)))},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"z-20 grid grid-cols-5 text-base bg-white gap-y-4",children:[e.jsxs("div",{className:"inline-grid items-end h-24 pr-3",children:[e.jsx("div",{className:"block text-sm font-medium leading-6 text-gray-900",children:"标题"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{name:"title",type:"text",autoComplete:"given-name",className:"px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"inline-grid items-end h-24 pr-3",children:[e.jsx("div",{className:"block text-sm font-medium leading-6 text-gray-900",children:"类型"}),e.jsx("div",{className:"grid mt-2",children:e.jsx(o,{onSelectedValue:r,items:a,value:n})})]}),e.jsxs("div",{className:"inline-grid items-end h-24 pr-3",children:[e.jsx("div",{className:"block text-sm font-medium leading-6 text-gray-900",children:"标签"}),e.jsx("div",{className:"grid mt-2",children:e.jsx(o,{onSelectedValue:r,items:a,value:n})})]}),e.jsxs("div",{className:"inline-grid items-end h-24 pr-3",children:[e.jsx("div",{className:"block text-sm font-medium leading-6 text-gray-900",children:"是否发布"}),e.jsx("div",{className:"grid mt-2",children:e.jsx("input",{type:"checkbox",checked:!!m,onChange:s=>x(s.target.checked?1:0),className:"w-9 h-9 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600 accent-indigo-500"})})]}),e.jsx("div",{className:"inline-grid items-end h-24",children:e.jsx("button",{type:"button",className:"px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"保存"})})]}),e.jsxs("div",{className:"grid grid-cols-2 h-[720px] mb-8 gap-4 mt-4 text-4xl",children:[e.jsx("div",{className:"py-3",children:e.jsx("div",{className:`relative\r
        h-[720px]\r
        overflow-y-scroll\r
        overscroll-contain\r
        text-base`,children:e.jsx(p,{value:d,height:"auto",theme:"dark",minHeight:"720px",extensions:[u.lineWrapping],basicSetup:{foldGutter:!1},onChange:g})})}),e.jsx("div",{className:"p-3",children:e.jsx("div",{className:"h-[720px] overflow-y-scroll overscroll-contain",children:e.jsx("div",{className:`
                  prose
                  prose-slate
                  prose-h2:mt-0
                  prose-h3:mt-0
                  prose-h4:mt-0
                  max-w-full
                  prose-code:rounded-md
                  prose-code:before:content-none 
                  prose-code:after:content-none
                  prose-p:before:content-none 
                  prose-p:after:content-none
                  prose-hr:my-4
                `,ref:i})})})]})]})};export{b as default};
