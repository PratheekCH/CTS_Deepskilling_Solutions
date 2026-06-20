package DesignPriciples_and_Patterns.codes.FactoryMethodPatternExample;

public class ExcelDocumentFactory extends DocumentFactory{
     public Document createDocument(){
        return new ExcelDocument() ;  
    }
}
