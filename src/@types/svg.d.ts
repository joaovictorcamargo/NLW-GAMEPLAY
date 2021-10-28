//sobrescrevendo
declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    //FC=funcional Component
    const content: React.FC<SvgProps>;
    //exportando o conteudo já tipado
    export default content;

}