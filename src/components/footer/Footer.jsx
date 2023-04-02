import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineUp,
} from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { FcPrevious } from "react-icons/fc";
import { RiMovie2Line } from "react-icons/ri";

export default function Footer() {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <hr className="text-gray-600 my-3" />
      <div className="flex justify-between px-4 md:px-8 py-3">
        <img src="./src/assets/images/digifa.svg" alt="logo" className="w-28" />
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <a href="#first" className="ml-3 text-gray-500">
            بازگشت به بالا
          </a>
          <AiOutlineUp className="text-gray-500" />
        </div>
      </div>
      <div className="md:px-8 px-4">
        <div className="md:inline text-sm text-gray-700 ">
          تلفن پشتیبانی ۰۱۰۱۰۱۰۱ - ۰۲۱{" "}
        </div>
        <div className="md:inline text-sm text-gray-700 md:border-r border-gray-600 md:mr-4 md:pr-4">
          {" "}
          ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم{" "}
        </div>
      </div>
      <div className="md:flex hidden px-20  justify-around py-3">
        <span className="flex flex-col items-center">
          <img
            src="./src/assets/images/options/express.svg"
            alt=""
            className="w-14"
          />
          <p className="text-xs ">امکان تحویل اکسپرس </p>
        </span>
        <span className="flex flex-col items-center">
          <img
            src="./src/assets/images/options/cash-on-delivery.svg"
            alt=""
            className="w-14"
          />
          <p className="text-xs ">امکان پرداخت در محل </p>
        </span>
        <span className="flex flex-col items-center">
          <img
            src="./src/assets/images/options/support.svg"
            alt=""
            className="w-14"
          />
          <p className="text-xs ">7روز هفته 24 ساعته </p>
        </span>
        <span className="flex flex-col items-center">
          <img
            src="./src/assets/images/options/days-return.svg"
            alt=""
            className="w-14"
          />
          <p className="text-xs ">هفت روز ضمانت بازگشت کالا </p>
        </span>
        <span className="flex flex-col items-center">
          <img
            src="./src/assets/images/options/original-products.svg"
            alt=""
            className="w-14"
          />
          <p className="text-xs ">ضمانت اصل بودن کالا </p>
        </span>
      </div>
      <div className="md:px-8 px-4 py-3 flex flex-wrap  justify-between">
        
          <ul>
            <li className="text-gray-700 text-lg my-3 font-bold">
              با دیجی کالا
            </li>
            <li className="text-gray-500 text-lg my-3">اتاق خبر دیجی‌کالا</li>
            <li className="text-gray-500 text-lg my-3">فروش در دیجی‌کالا</li>
            <li className="text-gray-500 text-lg my-3">فرصت‌های شغلی</li>
            <li className="text-gray-500 text-lg my-3">
              گزارش تخلف در دیجی‌کالا
            </li>
            <li className="text-gray-500 text-lg my-3">تماس با دیجی‌کالا</li>
            <li className="text-gray-500 text-lg my-3">درباره دیجی‌کالا</li>
          </ul>
          <ul>
            <li className="text-gray-700 text-lg my-3 font-bold">
              خدمات مشتریان
            </li>
            <li className="text-gray-500 text-lg my-3">
              پاسخ به پرسش‌های متداول
            </li>
            <li className="text-gray-500 text-lg my-3">
              رویه‌های بازگرداندن کالا
            </li>
            <li className="text-gray-500 text-lg my-3">شرایط استفاده</li>
            <li className="text-gray-500 text-lg my-3">حریم خصوصی</li>
            <li className="text-gray-500 text-lg my-3">گزارش باگ</li>
          </ul>

          <ul className="hidden md:list-item">
            <li className="text-gray-700 text-lg my-3 font-bold">
              راهنمای خرید از دیجی کالا
            </li>
            <li className="text-gray-500 text-lg my-3">نحوه ثبت سفارش </li>
            <li className="text-gray-500 text-lg my-3">رویه ارسال سفارش</li>
            <li className="text-gray-500 text-lg my-3">شیوه‌های پرداخت</li>
          </ul>
        
        <ul className="block md:list-item ">
          <div className="flex items-center md:block ">
            <li className="text-gray-700 text-xl ml-3 my-3 font-bold">
              همراه ما باشید!
            </li>
            <div className="flex ">
              <a href="#">
                <AiOutlineInstagram className=" w-10 text-gray-500 ml-3 h-auto" />
              </a>
              <a href="#">
                <AiOutlineTwitter className=" w-10 text-gray-500 mx-3 h-auto" />
              </a>
              <a href="#">
                <AiFillLinkedin className=" w-10 text-gray-500 mx-3 h-auto" />
              </a>
              <a href="#">
                <RiMovie2Line className=" w-10 text-gray-500 mx-3 h-auto" />
              </a>
            </div>
          </div>
          <p className="hidden md:block mt-5 text-lg font-medium">
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </p>
          <div className="h-16 flex py-3 ">
            <input
              type="text"
              id=" "
              placeholder="ایمیل شما"
              className="bg-gray-200 rounded-lg p-3 h-full w-full border-0"
            />
            <input
              type="button"
              className="text-gray-500 bg-gray-200 px-4 rounded-lg mr-2  h-full"
              value="ثبت"
            />
          </div>
        </ul>
      </div>
      <div className=" md:flex justify-between rounded-lg  bg-slate-700 md:mx-8 mx-4 md:p-2 py-2 items-center">
        <div className="flex items-center justify-center">
          <img
            src="./src/assets/images/android-icon-192x192.png"
            className="md:h-16 w-1/12 md:w-auto mx-2 "
            alt=""
          />
          <p className="text-white font-medium md:text-2xl">
            دانلود اپلیکیشن دیجی کالا
          </p>
        </div>
        <div className="flex flex-wrap md:h-[44px] justify-center  ">
          <img
            className="w-2/5 md:w-auto md:mx-2 m-1"
            src="./src/assets/images/downloading/google-play.svg"
            alt=""
          />
          <img
            className="w-2/5 md:w-auto md:mx-2 m-1"
            src="./src/assets/images/downloading/coffe-bazzar.svg"
            alt=""
          />
          <img
            className="w-2/5 md:w-auto md:mx-2 m-1"
            src="./src/assets/images/downloading/myket.svg"
            alt=""
          />
          <img
            className="w-2/5 md:w-auto md:mx-2 m-1"
            src="./src/assets/images/downloading/sib-app.svg"
            alt=""
          />
          <img
            className="hidden md:inline-block w-2/5 md:w-auto md:mx-2 m-1 px-3 rounded bg-white"
            src="./src/assets/images/downloading/More.svg"
            alt=""
          />
          <a href="#">
            <div className="md:hidden flex items-center my-2 ">
              <p className="text-white">اطلاعات بیشتر</p>
              <FaChevronLeft className="mx-1 text-white text-sm " />
            </div>
          </a>
        </div>
      </div>
      <div className="md:flex flex-wrap md:mx-8 mx-4 mt-5">
        <div
          className={` md:w-3/4 ${
            showMore && "h-56 overflow-y-hidden  z-10 relative"
          }`}
        >
          <div className=" text-gray-600 md:ml-8  ">
            <h3 className=" text-lg mt-3 text-justify font-semibold">
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
            </h3>
            <p className="text-justify">
              {" "}
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">
              کدام محصولات در دیجی‌کالا قابل سفارش هستند؟
            </h3>
            <p className="text-justify">
              {" "}
              تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود
              در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته
              و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا
              که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت
              کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید.
              بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا
              شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">کالای دیجیتال</h3>
            <p className="text-justify">
              {" "}
              انواع گوشی موبایل از برندهای مختلفی مثل آیفون، گوشی سامسونگ، گوشی
              نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5،
              انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل
              هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ،
              سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل
              مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه
              کالای دیجیتال در دیجی‌کالا قرار دارند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">خودرو، ابزار و تجهیزات صنعتی</h3>
            <p className="text-justify">
              {" "}
              انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
              و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
              خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه
              کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار
              می‌گیرند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">مد و پوشاک</h3>
            <p className="text-justify">
              {" "}
              محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی،
              لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری
              و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی
              و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا
              و... خریداری کنید.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">اسباب بازی کودک و نوزاد</h3>
            <p className="text-justify">
              {" "}
              در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک
              و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی، لوازم اتاق خواب
              کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا
              خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">کالاهای سوپر مارکتی</h3>
            <p className="text-justify">
              {" "}
              هر چیزی از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا
              پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه،
              زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل
              نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما
              هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">زیبایی و سلامت</h3>
            <p className="text-justify">
              {" "}
              انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و...
              همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع
              شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو و...، انواع لوازم شخصی
              برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا و نقره
              مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در
              گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای
              مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">خانه و آشپزخانه</h3>
            <p className="text-justify">
              {" "}
              یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است
              که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل
              راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل
              انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف
              و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان
              خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی
              دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا،
              جی پلاس و... حضور دارند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">کتاب، لوازم تحریر و هنر</h3>
            <p className="text-justify">
              {" "}
              بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین
              بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، بازی، لوازم
              تحریر، سازهایی مثل پیانو، سنتور، هنگ درام و... با بهترین قیمت‌ها و
              از بهترین برندها در دسترس شما قرار دارند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">ورزش و سفر</h3>
            <p className="text-justify">
              {" "}
              هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
              کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین
              شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی،
              بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">محصولات بومی و محلی</h3>
            <p className="text-justify">
              {" "}
              و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی
              متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین
              هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش
              شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره
              هفت‌سین و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان
              و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز
              دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. دیجی‌کالا
              همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم
              ۱۴۰۱، انواع ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و
              موزیک‌های شاد بهاری، وسایل مربوط به خانه‌تکانی و انواع لباس های
              عید را برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این
              حال و هوای تازه نهایت لذت را ببرید.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">گزارش های سالیانه دیجی کالا</h3>
            <p className="text-justify">
              {" "}
              در راستای توجه ویژه به شفافیت به عنوان یکی از اصلی‌ترین ارزش‌های
              محوری دیجی‌کالا، با شروع سال ۱۳۹۸ داستان‌پردازی با داده‌های آماری
              و ارائه گزارش‌های سالانه آغاز شد. مسیری که دستاورد آن تا امروز
              چندین گزارش سالانه و تخصصی مثل گزارش سالانه ۱۳۹۸، گزارش سالانه
              ۱۳۹۹ و گزارش سالانه ۱۴۰۰ دیجی‌کالا هستند. علاوه بر این، گزارش
              منابع انسانی سال ۱۳۹۹، گزارش منابع انسانی سال ۱۴۰۰ و همچنین گزارش
              کتاب دیجی‌کالا، از دیگر گزارش‌های تخصصی دیجی‌کالا به حساب می‌آیند.
              انتشار این گزارش‌ها امکان رصد شفاف‌تر و دقیق‌تر خدمات دیجی‌کالا را
              فراهم می‌کند، وضعیت بازار آنلاین کشور را به نمایش می‌گذارد و به
              تمامی کسب‌وکارهای ایرانی کمک می‌کند تا با فرایندهای فروش و عرضه
              آنلاین کالاهای خود بیشتر آشنا شوند.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">جام جهانی قطر 2022</h3>
            <p className="text-justify">
              {" "}
              جام‌ جهانی ۲۰۲۲ قطر از ۲۹ آبان شروع می شود و دیجی‌کالا به همراه
              بازی‌ و مسابقه پیش‌بینی و جوایز میلیونی در کنار شما خواهد بود. شما
              می‌توانید با شرکت در مسابقه پیش‌بینی بازی‌ها، شانس خود را در
              قرعه‌کشی روزانه جام‌جهانی ۲۰۲۲ قطر امتحان کنید. در کنار بازی،
              مسابقه و قرعه‌کشی، در اینجا با جدول برنامه مسابقات، اخبار
              جام‌جهانی و نتایج بازی‌ها به روز خواهیم بود.
            </p>
            <h3 className=" text-lg mt-3 text-justify font-semibold">بلک فرایدی دیجی کالا</h3>
            <p className="text-justify">
              {" "}
              بلک فرایدی دیجی کالا همراه با میلیاردها تخفیف برای میلیون‌ها کالا،
              از چهارشنبه دوم آذرماه آغاز و تا پایان جمعه چهارم ادامه خواهد
              داشت. در بلک فرایدی دیجی کالا، علاوه‌ بر اینکه برندهای موردعلاقه
              شما از تمامی دسته‌بندی‌های موبایل، خانه و آشپزخانه، سلامت و
              زیبایی، پوشاک و ... با تخفیف‌های ویژه حضور دارند، می‌توانید بازی
              کنید، امتیاز به دست آورید و با کدهای تخفیف جذاب و شگفت‌انگیز خرید
              کنید.
            </p>{" "}
          </div>
          <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-white"></div>
        </div>
        <div className="order-2 w-full">

        <button
        className=" text-cyan-600 flex items-center m-3  font-bold"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "مشاهده بیشتر" : "بستن"}
        <FcPrevious className="md:mx-1 text-cyan-600 text-sm " />
      </button>
        </div>
        <div className=" order-1 md:w-1/4 flex">
          <div className="w-1/3 md:m-2 p-2 border rounded flex justify-center h-[110px]">
            <img
              className="h-full"
              src="./src/assets/images/more info/kasbokar.png"
              alt=""
            />
          </div>
          <div className="w-1/3 md:m-2 mx-2 p-2 border rounded flex justify-center h-[110px]">
            <img
              className="h-full"
              src="./src/assets/images/more info/rezi.png"
              alt=""
            />
          </div>
          <div className="w-1/3 md:m-2 p-2 border rounded flex justify-center h-[110px]">
            <img
              className="h-full"
              src="./src/assets/images/more info/rezi.png"
              alt=""
            />
          </div>
        </div>
      </div>
      

      <hr className="text-gray-600 my-3" />

      <p className="text-center text-sm my-6">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </p>
      <div className="flex flex-wrap    bg-gray-100 justify-between  ">
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digimag.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digipay.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digistyle.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digiplus.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digiclub.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/jet.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/magnet.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digimehr.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/fidibo.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/diginext.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/pindo.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/komodaa.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digiexpress.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/ganjeh.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>

        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digify.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/smartech.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>

        <a href="#" className="mx-auto md:p-6 p-2 py-6 ">
          <div className="h-[20px]  ">
            <img
              src="./src/assets/images/Bottom logoes/digikala-business.svg"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
}
