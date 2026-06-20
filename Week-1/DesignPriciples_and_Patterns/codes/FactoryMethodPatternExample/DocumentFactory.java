package DesignPriciples_and_Patterns.codes.FactoryMethodPatternExample;

public abstract class DocumentFactory {
    public abstract Document createDocument();

    public void displayDocument() {
        Document document = createDocument();
        document.open();
    }
}
