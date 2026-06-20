package DesignPriciples_and_Patterns.codes.FactoryMethodPatternExample;


public class WordDocumentFactory  extends DocumentFactory{

    public Document createDocument(){
        return new WordDocument() ;
            
    }

}
