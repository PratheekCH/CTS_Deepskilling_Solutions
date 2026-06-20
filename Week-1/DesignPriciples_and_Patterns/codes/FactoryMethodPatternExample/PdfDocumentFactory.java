package DesignPriciples_and_Patterns.codes.FactoryMethodPatternExample;

public class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument()
    {
        return new PdfDocument();
    }
}
