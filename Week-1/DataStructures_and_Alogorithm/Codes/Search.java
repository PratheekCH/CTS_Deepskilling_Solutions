package DataStructures_and_Alogorithm.Codes;
class Product {
    int productId;
    String productName;
    String category;

    Product(int pid , String pName , String cat  )
    {
        this.productId = pid;
        this.productName = pName;
        this.category = cat;
    }
}

public class Search{
    public static Product linearSearch(Product products[] , int targetId )
    {
        for(Product i : products)
        {
            if(i.productId == targetId)
                return i;
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
    public static void main(String args[])
    {
        Product products[] = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")        
        };

        int searchId = 106;

        Product result = linearSearch(products, searchId);

        if (result != null) {
            System.out.println("Product Found: " + result);
        } else {
            System.out.println("Product Not Found");
        }
    }
}