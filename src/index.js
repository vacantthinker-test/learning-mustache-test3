import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

window.MyTemplateEngine = {
    render: function(template, data){

        let tokens = parseTemplateToTokens(template)
        console.log('index:', tokens)

        return renderTemplate(tokens, data)
    }
}