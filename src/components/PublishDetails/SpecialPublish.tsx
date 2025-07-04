import Image from "next/image";
import ink from "@/assets/ink1.png";
function SpecialPublish() {
  return (
    <div className="flex md:flex-row flex-col lg:gap-6 gap-4 justify-center  ">
      <div className="flex   md:justify-start md:items-start   justify-center items-center relative w-full min-w-[300] max-h-[360]">
        <div className="flex md:justify-start md:items-start  justify-center items-center">
          <Image alt="" src={ink} width={240} height={360} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>
          Özel paketin avantajlarından biri... Yazar, eserini sahiplenmekte ve
          belirli sürede belirli adedinin satılacağına inanmaktadır.
        </p>

        <p>
          Eserin ilk baskısı 500 adettir. Yayınevi, aşağıda belirtilen standart
          yayınevi hizmetlerinden dolayı herhangi bir ücret almayacaktır. Ancak
          Yazar, basılmasından sonra kitabın 200 adedinin satışını garanti
          edecektir. Birinci seçenek, kitabın 200 adedinin doğrudan kendi satış
          ve dağıtımı için etiket fiyatından %50 de indirim yapılarak Yazar
          satın alabilir. İkinci seçenekte; Yazar’ın ilk aşamada gerek maliyet
          ve gerekse satış yükümlülüğünü azaltabilmek amacıyla, sadece 100 adedi
          etiket fiyatı üzerinden %50 indirimli olarak Yazar satın alabilir.
          Kalan 100 adet ise, D&R, n11, Babil, Emek, İdefix, Alfa, Amazon
          Türkiye, Okuoku, İnsancıl Kitap, Trendyol, Hepsiburada, Kitantik,
          Nadir Kitap gibi ulusal dağıtım firmalarının sitelerinde satışa
          sunulur. İlk 2 ay içerisinde bu satış sitelerinin toplam satışı 100
          adetten az olduğu taktirde, toplam satışlarla arasındaki fark kadar
          kitap, yine %50 indirimli olarak Yazar’ın kendisi tarafından
          alınmaktadır.
        </p>
        <p>
          Eserin ilk baskısı 500 adettir. Yayınevi, aşağıda belirtilen standart
          yayınevi hizmetlerinden dolayı herhangi bir ücret almayacaktır. Ancak
          Yazar, basılmasından sonra kitabın 200 adedinin satışını garanti
          edecektir. Birinci seçenek, kitabın 200 adedinin doğrudan kendi satış
          ve dağıtımı için etiket fiyatından %50 de indirim yapılarak Yazar
          satın alabilir. İkinci seçenekte; Yazar’ın ilk aşamada gerek maliyet
          ve gerekse satış yükümlülüğünü azaltabilmek amacıyla, sadece 100 adedi
          etiket fiyatı üzerinden %50 indirimli olarak Yazar satın alabilir.
          Kalan 100 adet ise, D&R, n11, Babil, Emek, İdefix, Alfa, Amazon
          Türkiye, Okuoku, İnsancıl Kitap, Trendyol, Hepsiburada, Kitantik,
          Nadir Kitap gibi ulusal dağıtım firmalarının sitelerinde satışa
          sunulur. İlk 2 ay içerisinde bu satış sitelerinin toplam satışı 100
          adetten az olduğu taktirde, toplam satışlarla arasındaki fark kadar
          kitap, yine %50 indirimli olarak Yazar’ın kendisi tarafından
          alınmaktadır.
        </p>
        <p>Hizmetler</p>
        <ul>
          <li>Editörlük</li>
          <li>Editörlük</li>
          <li>Editörlük</li>
          <li>İmza Günü</li>
        </ul>
      </div>
    </div>
  );
}
export default SpecialPublish;
