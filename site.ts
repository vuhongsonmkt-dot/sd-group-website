export type Locale = "vi" | "en";

export const services = [
  { slug:"social", vi:"Xây dựng & chăm sóc Fanpage", en:"Social Media Management", descVi:"Chiến lược nội dung, thiết kế, phản hồi cộng đồng và báo cáo hiệu quả trên một quy trình nhất quán.", descEn:"Content strategy, design, community response and performance reporting in one consistent workflow." },
  { slug:"performance", vi:"Quảng cáo đa nền tảng", en:"Cross-platform Advertising", descVi:"Tối ưu quảng cáo Meta, Google, TikTok theo mục tiêu kinh doanh và dữ liệu chuyển đổi.", descEn:"Meta, Google and TikTok campaigns optimized around business goals and conversion data." },
  { slug:"ecommerce", vi:"Vận hành sàn thương mại điện tử", en:"E-commerce Operations", descVi:"Từ gian hàng, nội dung, khuyến mãi đến tăng trưởng doanh số trên các sàn trọng điểm.", descEn:"Storefront, content, promotions and sales growth across key marketplaces." },
  { slug:"seo", vi:"SEO Website", en:"Website SEO", descVi:"Nền tảng kỹ thuật, nội dung tìm kiếm và chiến lược từ khóa bền vững cho SME.", descEn:"Technical foundations, search content and sustainable keyword strategy for SMEs." },
  { slug:"website", vi:"Website & Landing Page", en:"Web & Landing Pages", descVi:"Thiết kế thuần code, tốc độ cao, chuẩn SEO và tập trung vào trải nghiệm chuyển đổi.", descEn:"Code-first, high-performance and SEO-ready experiences designed to convert." },
  { slug:"content", vi:"Sáng tạo nội dung", en:"Content Creation", descVi:"Ý tưởng, kịch bản, thiết kế và nội dung đa định dạng đúng tinh thần thương hiệu.", descEn:"Ideas, scripts, design and multi-format content true to your brand." },
  { slug:"production", vi:"Quay chụp & sản xuất video", en:"Photo & Video Production", descVi:"TVC, social video, ảnh sản phẩm và nội dung dọc với ngôn ngữ hình ảnh nhất quán.", descEn:"TVCs, social videos, product photography and vertical content with one visual language." },
  { slug:"growth", vi:"Tăng trưởng kênh", en:"Channel Growth", descVi:"Tăng follow, view và độ phủ bằng chiến lược nội dung kết hợp phân phối có kiểm soát.", descEn:"Grow followers, views and reach through controlled content and distribution strategy." },
  { slug:"reputation", vi:"Quản trị đánh giá", en:"Reputation Management", descVi:"Theo dõi, phản hồi và nâng chất lượng hiện diện thương hiệu trên các điểm chạm số.", descEn:"Monitor, respond and strengthen brand presence across digital touchpoints." },
  { slug:"livestream", vi:"Quảng bá Livestream", en:"Livestream Promotion", descVi:"Kịch bản, vận hành và quảng bá livestream hướng đến tương tác và doanh thu.", descEn:"Scripting, operations and promotion focused on engagement and revenue." },
];

export const products = [
  { code:"AI/01", vi:"Tài khoản AI", en:"AI Accounts", descVi:"Giải pháp tài khoản và gói AI chính hãng phù hợp nhu cầu cá nhân, đội nhóm và doanh nghiệp.", descEn:"Official AI plans matched to individual, team and business needs.", accent:"blue" },
  { code:"SAAS/02", vi:"Phần mềm bản quyền", en:"Licensed Software", descVi:"Tư vấn lựa chọn, kích hoạt và quản lý các công cụ SaaS phục vụ vận hành và sáng tạo.", descEn:"Selection, activation and management of SaaS tools for operations and creative work.", accent:"ice" },
  { code:"TEAM/03", vi:"Giải pháp đội nhóm", en:"Team Solutions", descVi:"Chuẩn hóa công cụ làm việc, phân quyền và chi phí cho đội ngũ SME đang tăng trưởng.", descEn:"Standardize tools, access and costs for growing SME teams.", accent:"navy" },
];

export const posts = [
  {
    slug:"ai-cho-sme-2026", date:"18.08.2026", categoryVi:"AI & Tăng trưởng", categoryEn:"AI & Growth",
    titleVi:"SME nên bắt đầu ứng dụng AI từ đâu trong năm 2026?", titleEn:"Where should SMEs begin with AI in 2026?",
    excerptVi:"Một lộ trình thực tế để biến AI thành năng lực vận hành thay vì chỉ là một công cụ thử nghiệm.", excerptEn:"A practical roadmap for turning AI into an operating capability—not just an experiment.",
    bodyVi:["AI tạo ra giá trị rõ nhất khi doanh nghiệp bắt đầu từ một vấn đề cụ thể: thời gian phản hồi khách hàng, tốc độ sản xuất nội dung hoặc chất lượng báo cáo. Đừng bắt đầu bằng câu hỏi “mua công cụ nào”; hãy bắt đầu bằng câu hỏi “quy trình nào đang gây lãng phí nhất”.","Với SME, ba điểm khởi đầu có hiệu quả nhanh thường là trợ lý nội dung, tổng hợp dữ liệu bán hàng và hệ thống hóa tài liệu nội bộ. Mỗi thử nghiệm nên có người phụ trách, tiêu chí đo lường và giới hạn dữ liệu được phép sử dụng.","Sau giai đoạn thử nghiệm, hãy chuẩn hóa tài khoản, phân quyền và hướng dẫn sử dụng. Đây là lúc AI chuyển từ một tiện ích cá nhân thành năng lực chung của tổ chức."],
    bodyEn:["AI creates the clearest value when a business starts with a specific problem: response time, content velocity or reporting quality. Do not begin with “which tool should we buy?” Begin with “which workflow wastes the most time?”","For SMEs, fast-value starting points often include content assistance, sales-data synthesis and internal knowledge organization. Each pilot should have an owner, measurable criteria and clear data boundaries.","After the pilot, standardize accounts, permissions and usage guidance. That is when AI moves from a personal utility to a shared organizational capability."]
  },
  {
    slug:"full-service-hay-chuyen-mon", date:"09.08.2026", categoryVi:"Agency", categoryEn:"Agency",
    titleVi:"Full-service hay chuyên môn hóa: SME nên chọn mô hình nào?", titleEn:"Full-service or specialist: which model fits an SME?",
    excerptVi:"Cách chọn đối tác marketing theo giai đoạn tăng trưởng, không chạy theo tên gọi mô hình.", excerptEn:"Choose a marketing partner for your growth stage—not for the label on the model.",
    bodyVi:["Một agency full-service phù hợp khi doanh nghiệp cần một chiến lược xuyên suốt nhiều kênh nhưng chưa có đội ngũ marketing nội bộ lớn. Lợi ích lớn nhất không phải số lượng dịch vụ, mà là khả năng giữ thông điệp và dữ liệu trong cùng một hệ thống.","Đối tác chuyên môn hóa lại phù hợp khi bài toán đã được xác định rất rõ, ví dụ cần tối ưu SEO kỹ thuật hoặc sản xuất một TVC. Ở giai đoạn này, chiều sâu chuyên môn quan trọng hơn khả năng bao phủ.","Hãy chọn dựa trên độ rõ của bài toán, năng lực quản trị nội bộ và tốc độ phối hợp mong muốn. Mô hình tốt nhất là mô hình giảm ma sát và tạo ra kết quả có thể đo lường."],
    bodyEn:["A full-service agency works well when a business needs one strategy across channels but does not yet have a large in-house marketing team. Its biggest benefit is not the number of services, but the ability to keep messaging and data in one system.","A specialist is more suitable when the problem is already precise, such as technical SEO or a single TVC production. At that stage, depth matters more than coverage.","Choose based on problem clarity, internal management capacity and required collaboration speed. The right model reduces friction and produces measurable outcomes."]
  },
  {
    slug:"website-chuyen-doi-sme", date:"28.07.2026", categoryVi:"Web & SEO", categoryEn:"Web & SEO",
    titleVi:"Một website SME cần gì để thực sự tạo chuyển đổi?", titleEn:"What does an SME website need to actually convert?",
    excerptVi:"Thiết kế đẹp chỉ là điểm bắt đầu; cấu trúc thông tin và bằng chứng mới tạo ra quyết định.", excerptEn:"Beautiful design is only the start; structure and proof drive decisions.",
    bodyVi:["Một website chuyển đổi tốt giúp khách hàng trả lời nhanh ba câu hỏi: bạn giải quyết vấn đề gì, vì sao nên tin bạn và bước tiếp theo là gì. Nếu ba câu trả lời này bị chôn dưới hiệu ứng hoặc nội dung chung chung, thiết kế đẹp cũng khó tạo doanh thu.","Mỗi trang dịch vụ nên có một mục tiêu rõ, bằng chứng phù hợp và lời kêu gọi hành động cụ thể. Tốc độ tải, trải nghiệm di động và khả năng tìm thấy trên Google là phần của thiết kế, không phải việc xử lý sau cùng.","Hãy đo lường cuộc gọi, lượt gửi biểu mẫu và các điểm rời trang. Website nên được tối ưu liên tục như một nhân viên bán hàng số, không phải một brochure bất biến."],
    bodyEn:["A conversion-focused website answers three questions quickly: what problem do you solve, why should visitors trust you and what should they do next? If those answers are buried beneath effects or generic copy, beautiful design will struggle to generate revenue.","Every service page needs a clear goal, relevant proof and a specific call to action. Load speed, mobile usability and search visibility are part of design—not afterthoughts.","Measure calls, form submissions and exit points. A website should improve continuously like a digital salesperson, not remain a static brochure."]
  }
] as const;

export const copy = {
  vi: {
    nav:["Giới thiệu","Dịch vụ","Sản phẩm số","Tin tức"], cta:"Bắt đầu dự án", eyebrow:"Independent digital agency · Ho Chi Minh City",
    headlineA:"Chơi ý tưởng.", headlineB:"Chạm", headlineC:" thị trường.", lead:"SD Group biến chiến lược, sáng tạo và công nghệ thành tăng trưởng thực tế cho doanh nghiệp SME trên toàn Việt Nam.", explore:"Khám phá năng lực", talk:"Trao đổi cùng chúng tôi",
    aboutKicker:"Tư duy toàn diện · Thực thi sắc nét", aboutTitle:"Không chỉ làm marketing. Chúng tôi kiến tạo lực đẩy.", aboutBody:"SD Group là đối tác tăng trưởng số cho SME — kết nối chiến lược, sáng tạo, truyền thông, công nghệ và sản phẩm số trong một hệ sinh thái linh hoạt.",
    serviceKicker:"Full-service capability", serviceTitle:"Một đội ngũ. Mọi điểm chạm.", serviceBody:"Từ nền tảng thương hiệu đến tăng trưởng đa kênh, mỗi năng lực đều được kết nối bằng một chiến lược chung.", allServices:"Xem toàn bộ dịch vụ",
    productKicker:"Digital products", productTitle:"Công cụ đúng. Tăng trưởng nhanh.", productBody:"Tài khoản số và giải pháp phần mềm minh bạch, phù hợp nhu cầu vận hành thực tế của doanh nghiệp.",
    processKicker:"Cách chúng tôi vận hành", processTitle:"Từ insight đến impact.", process:["Hiểu bài toán","Thiết kế chiến lược","Sáng tạo & triển khai","Đo lường & tối ưu"],
    insightKicker:"SD Journal", insightTitle:"Ý tưởng để đi trước thị trường.", allPosts:"Xem tất cả bài viết",
    contactKicker:"Start a conversation", contactTitle:"Có một bài toán cần bứt phá?", contactBody:"Kể SD Group nghe về mục tiêu tiếp theo của bạn. Chúng tôi sẽ phản hồi với góc nhìn rõ ràng và hướng đi thực tế.", send:"Gửi yêu cầu", name:"Họ và tên", company:"Doanh nghiệp", phone:"Số điện thoại", email:"Email", need:"Bạn đang cần hỗ trợ gì?", message:"Chia sẻ ngắn về mục tiêu của bạn", privacy:"Bằng việc gửi, bạn đồng ý để SD Group liên hệ về yêu cầu này.", address:"621/30 Nguyễn Ảnh Thủ, Quận 12, TP.HCM",
  },
  en: {
    nav:["About","Services","Digital Products","Insights"], cta:"Start a project", eyebrow:"Independent digital agency · Ho Chi Minh City",
    headlineA:"Play with ideas.", headlineB:"Move", headlineC:" the market.", lead:"SD Group turns strategy, creativity and technology into measurable growth for SMEs across Vietnam.", explore:"Explore our capabilities", talk:"Talk to our team",
    aboutKicker:"Integrated thinking · Precise execution", aboutTitle:"Beyond marketing. We create momentum.", aboutBody:"SD Group is a digital growth partner for SMEs—connecting strategy, creative, media, technology and digital products in one agile ecosystem.",
    serviceKicker:"Full-service capability", serviceTitle:"One team. Every touchpoint.", serviceBody:"From brand foundations to cross-channel growth, every capability is connected by one shared strategy.", allServices:"View all services",
    productKicker:"Digital products", productTitle:"The right tools. Faster growth.", productBody:"Transparent digital accounts and software solutions matched to real business operations.",
    processKicker:"How we work", processTitle:"From insight to impact.", process:["Frame the challenge","Design the strategy","Create & execute","Measure & optimize"],
    insightKicker:"SD Journal", insightTitle:"Ideas for staying ahead.", allPosts:"View all insights",
    contactKicker:"Start a conversation", contactTitle:"Ready to unlock your next move?", contactBody:"Tell SD Group what you want to achieve next. We will respond with a clear perspective and a practical path forward.", send:"Send inquiry", name:"Full name", company:"Company", phone:"Phone", email:"Email", need:"What do you need?", message:"Tell us briefly about your goal", privacy:"By submitting, you agree that SD Group may contact you about this inquiry.", address:"621/30 Nguyen Anh Thu, District 12, Ho Chi Minh City",
  }
} as const;
