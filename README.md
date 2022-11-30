Importante Instalar! 
1) npm i react-router-dom 
2) npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/styles ->Instalado en branch Search
3) npm install @mui/icons-material
4) npm i --save @fortawesome/fontawesome-svg-core   ->importante
   npm i --save @fortawesome/free-solid-svg-icons
   npm i --save @fortawesome/free-regular-svg-icons
   npm i --save @fortawesome/free-duotone-svg-icons
   npm i --save @fortawesome/free-brands-svg-icons
   npm i --save @fortawesome/react-fontawesome@latest
   npm install babel-plugin-macros
   
   Add the following to your babel.config.js file:
   module.exports = function (api) {
   return {
    plugins: ['macros'],
   }
   }

   Then, create a babel-plugin-macros.config.js and add the fontawesome-svg-core settings. 
   You can set the license to either free or pro depending on the icons you are planning to use.

   module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  }
  }

5) npm install axios
6) npm install --save radium
