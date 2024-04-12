import Section from "../components/section";
import SectionTitle from "../components/section-title";

const CompanyHistory = () => {
  return (
    <Section>
      <div className="grid xl:grid-cols-2 grid-cols-1 sm:gap-5 gap-8">
        <div>
          <SectionTitle className="sm:mb-[61px] mb-10">
            Ananalar va qadriyatlarga asoslangan kompaniyamiz tarixi
          </SectionTitle>
          <div className="grid gap-5">
            <p className="text-gray sm:text-xl text-base">
              “Doctor Ali” brendiga 1992-yilda “Mehrigiyo” xalqaro kompaniyasi
              tomonidan asos solingan boʻlib, 32 yildan buyon organik
              mahsulotlar ishlab chiqarish va sogʻlom turmush tarzini targʻib
              qilish bilan shugʻullanib keladi.{" "}
            </p>
            <p className="text-gray sm:text-xl text-base">
              Kompaniya tomonidan bugungi kunga qadar ishlab chiqarilgan
              mahsulotlar turi 100 dan oshadi, ularning tarkibini tashkil
              etuvchi oʻsimlik va dorivor giyohlar esa 500 gektardan oshiq
              maydonda, malakali mutaxassislar nazorati ostida yetishtiriladi.
            </p>
            <p className="text-gray sm:text-xl text-base">
              Jahon standartlari asosida ishlab chiqariladigan va xalqaro
              sertifikatlarga ega boʻlgan mahsulotlarimiz Oʻzbekiston bilan bir
              qatorda Qozogʻiston, Qirgʻiziston, Tojikiston, Saudiya Arabistoni,
              Xitoy va AQSh bozorlariga kirib borgan.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/images/history.jpg"
            alt="history"
            className="object-cover xl:ml-auto mx-auto"
          />
        </div>
      </div>
    </Section>
  );
};

export default CompanyHistory;
