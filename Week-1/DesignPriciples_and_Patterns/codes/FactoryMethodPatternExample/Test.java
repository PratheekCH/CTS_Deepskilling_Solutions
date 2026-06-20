package DesignPriciples_and_Patterns.codes.FactoryMethodPatternExample;

public class Test {
    public static void main(String args[]){
        DocumentFactory word = new WordDocumentFactory();
        word.displayDocument();

        DocumentFactory excel = new ExcelDocumentFactory();
        excel.displayDocument();

        DocumentFactory pdf = new PdfDocumentFactory();
        pdf.displayDocument();

    }
}
