const products = [
  {id:1,name:'Áo Gym Performance Pro',category:'Quần áo',type:'clothes',price:399000,oldPrice:499000,rating:4.8,reviews:124,stock:35,badge:'Bán chạy',sizes:['S','M','L','XL','XXL'],icon:'TEE',shortDescription:'Áo tập co giãn, thoáng khí, phù hợp gym và fitness.',description:'Performance Pro sử dụng chất liệu co giãn 4 chiều, bề mặt nhẹ và thoát ẩm nhanh. Form thể thao giúp người mặc vận động linh hoạt trong các bài đẩy, kéo, squat và cardio.'},
  {id:2,name:'Giày chạy bộ Energy Runner X2',category:'Giày chạy bộ',type:'shoes',price:1290000,oldPrice:1590000,rating:4.9,reviews:98,stock:18,badge:'Hot',sizes:['39','40','41','42','43'],icon:'RUN',shortDescription:'Giày chạy nhẹ, đệm đàn hồi tốt và bám đường ổn định.',description:'Energy Runner X2 hướng đến chạy bộ hằng ngày với lớp đệm đàn hồi, upper thoáng khí và đế cao su tạo độ bám tốt trên mặt đường khô.'},
  {id:3,name:'Găng tay Gym ProGrip',category:'Găng tập',type:'gloves',price:299000,oldPrice:359000,rating:4.7,reviews:79,stock:42,badge:'Ưa chuộng',sizes:['M','L','XL'],icon:'GRIP',shortDescription:'Găng tập chống trượt, hỗ trợ bảo vệ lòng bàn tay.',description:'ProGrip có bề mặt tăng ma sát, lớp đệm lòng bàn tay và quai cổ tay dễ điều chỉnh. Phù hợp các bài kéo xô, row, dumbbell và máy tập.'},
  {id:4,name:'Tạ tay Rubber Dumbbell 10KG',category:'Dụng cụ tập',type:'equipment',price:1190000,oldPrice:1390000,rating:4.8,reviews:56,stock:12,badge:'Gym',sizes:['10KG'],icon:'DB',shortDescription:'Tạ tay bọc cao su dành cho gym và tập tại nhà.',description:'Dumbbell 10KG có đầu bọc cao su giảm va chạm mặt sàn và tay cầm kim loại nhám tăng độ bám. Phù hợp curl, press, row, lunge và goblet squat.'},
  {id:5,name:'Dây kháng lực PowerBand Set',category:'Dụng cụ tập',type:'equipment',price:259000,oldPrice:329000,rating:4.8,reviews:145,stock:58,badge:'Tiết kiệm',sizes:['Set 5 mức'],icon:'BAND',shortDescription:'Bộ dây kháng lực 5 mức hỗ trợ tập toàn thân.',description:'PowerBand Set gồm nhiều mức lực để khởi động, activation, tập mông, vai và các bài hỗ trợ phục hồi vận động.'},
  {id:6,name:'Thảm Yoga Premium Pro',category:'Yoga',type:'equipment',price:489000,oldPrice:590000,rating:4.9,reviews:112,stock:25,badge:'Premium',sizes:['183 x 61 cm'],icon:'YOGA',shortDescription:'Thảm yoga chống trượt và đàn hồi tốt.',description:'Premium Pro phù hợp yoga, stretching, pilates và bodyweight training. Bề mặt có độ bám cao và độ dày vừa phải.'},
  {id:7,name:'Quần Short FlexMove',category:'Quần áo',type:'clothes',price:349000,oldPrice:429000,rating:4.7,reviews:67,stock:46,badge:'New',sizes:['S','M','L','XL'],icon:'SHORT',shortDescription:'Quần short nhẹ và thoải mái cho các hoạt động thể thao.',description:'FlexMove sử dụng chất vải nhẹ, cạp co giãn và đường may tối giản, phù hợp chạy bộ, gym và cầu lông.'},
  {id:8,name:'Áo khoác Active Wind',category:'Quần áo',type:'clothes',price:699000,oldPrice:849000,rating:4.7,reviews:43,stock:29,badge:'Outdoor',sizes:['M','L','XL','XXL'],icon:'WIND',shortDescription:'Áo khoác thể thao nhẹ dành cho hoạt động ngoài trời.',description:'Active Wind có kết cấu nhẹ, cản gió ở mức cơ bản và thoáng khí, phù hợp chạy bộ buổi sáng hoặc di chuyển ngoài trời.'},
  {id:9,name:'Bình nước SportFlow 1L',category:'Phụ kiện',type:'accessories',price:219000,oldPrice:279000,rating:4.6,reviews:88,stock:75,badge:'Best value',sizes:['1L'],icon:'1L',shortDescription:'Bình nước dung tích lớn có vạch theo dõi lượng nước.',description:'SportFlow 1L dùng nắp bật, quai cầm và vạch thời gian để nhắc uống nước trong ngày hoặc trong buổi tập.'},
  {id:10,name:'Foam Roller Recovery X',category:'Phục hồi',type:'recovery',price:329000,oldPrice:399000,rating:4.8,reviews:64,stock:39,badge:'Recovery',sizes:['33 cm'],icon:'ROLL',shortDescription:'Con lăn hỗ trợ thư giãn cơ sau tập.',description:'Recovery X có bề mặt nhiều vùng tiếp xúc để lăn cơ đùi, mông, lưng trên và bắp chân sau buổi tập.'},
  {id:11,name:'Túi Gym Urban 35L',category:'Phụ kiện',type:'accessories',price:459000,oldPrice:549000,rating:4.7,reviews:51,stock:31,badge:'Urban',sizes:['35L'],icon:'BAG',shortDescription:'Túi tập 35L nhiều ngăn, có ngăn giày riêng.',description:'Gym Urban 35L được chia ngăn quần áo, phụ kiện và giày để dễ sắp xếp đồ tập hoặc dùng cho chuyến đi ngắn.'},
  {id:12,name:'Dây nhảy Speed Rope RX',category:'Cardio',type:'equipment',price:189000,oldPrice:239000,rating:4.8,reviews:132,stock:82,badge:'Cardio',sizes:['Điều chỉnh'],icon:'ROPE',shortDescription:'Dây nhảy nhẹ, xoay nhanh dành cho cardio.',description:'Speed Rope RX có dây điều chỉnh chiều dài và vòng bi xoay mượt, phù hợp warm-up, cardio và circuit.'}
];

products.forEach((p,i)=>{ p.image = makeSportImage({title:p.name,subtitle:p.shortDescription,seed:100+i,kind:'product',icon:p.icon}); });

function article(sections){
  return sections.map(s=>`<section class="article-section"><h2>${s.h}</h2>${s.p.map(x=>`<p>${x}</p>`).join('')}${s.list?`<ul>${s.list.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}${s.note?`<div class="article-callout"><strong>${s.note.title}</strong><p>${s.note.text}</p></div>`:''}</section>`).join('');
}

const blogs = [
  {
    id:1, category:'TẬP LUYỆN', title:'Hướng dẫn tập gym cho người mới bắt đầu: từ buổi đầu đến 8 tuần đầu tiên', icon:'GYM',
    excerpt:'Lộ trình nền tảng giúp người mới biết bắt đầu từ đâu, tập bao nhiêu buổi, chọn bài thế nào và tăng tiến ra sao.',
    content: article([
      {h:'1. Đừng bắt đầu bằng việc tìm “lịch tập nặng nhất”',p:['Người mới thường nghĩ rằng tập càng nhiều bài, càng nhiều buổi và càng nặng thì tiến bộ càng nhanh. Thực tế, mục tiêu của giai đoạn đầu nên là học kỹ thuật, tạo thói quen và tìm mức vận động mà cơ thể có thể phục hồi tốt.','Trong 4-8 tuần đầu, một lịch 3 buổi toàn thân hoặc 4 buổi upper/lower thường dễ duy trì hơn lịch chia quá nhiều nhóm cơ. Điều quan trọng là bạn có thể lặp lại lịch đó đều đặn thay vì tập rất sung trong một tuần rồi nghỉ dài.'],list:['Khởi động 5-10 phút.','Mỗi buổi ưu tiên 4-6 bài chính.','Mỗi bài thường 2-3 hiệp là đủ cho người mới.','Dừng hiệp khi kỹ thuật bắt đầu xuống rõ rệt.']},
      {h:'2. Học 6 mẫu chuyển động cơ bản',p:['Bạn không cần hàng chục bài khác nhau. Hãy học squat, hip hinge, push, pull, lunge và core/bracing. Khi làm tốt các mẫu chuyển động này, bạn có thể biến thể bằng máy, tạ đơn, thanh đòn hoặc trọng lượng cơ thể.','Ví dụ, nhóm push có thể là chống đẩy, chest press hoặc dumbbell press. Nhóm pull có thể là seated row, lat pulldown hoặc dumbbell row.'],note:{title:'Mẹo thực tế',text:'Hãy quay một đoạn video ngắn ở góc ngang khi học squat hoặc hinge. Video giúp bạn nhìn ra tư thế dễ hơn so với chỉ dựa vào cảm giác.'}},
      {h:'3. Chọn mức tạ như thế nào?',p:['Mức tạ phù hợp là mức cho phép bạn hoàn thành số lần lặp dự kiến với kỹ thuật ổn định nhưng vẫn cảm thấy có thử thách. Với người mới, nên kết thúc hiệp khi bạn ước tính vẫn còn có thể làm thêm khoảng 2-3 lần lặp đẹp.','Nếu đặt mục tiêu 8-12 lần mà bạn chỉ làm được 5 lần rồi kỹ thuật vỡ, mức tạ đang quá cao. Nếu làm 12 lần rất nhẹ và có thể tiếp tục 8-10 lần nữa, mức tạ có thể quá thấp cho mục tiêu tăng sức mạnh/tăng cơ.']},
      {h:'4. Ví dụ lịch 3 buổi/tuần',p:['Bạn có thể tập thứ Hai - Tư - Sáu hoặc cách ngày tương tự. Mỗi buổi cách nhau ít nhất một ngày nghỉ tương đối giúp người mới phục hồi tốt hơn.'],list:['Goblet Squat: 3 x 8-12.','Chest Press hoặc Push-up: 3 x 8-12.','Lat Pulldown hoặc Row: 3 x 8-12.','Romanian Deadlift: 2-3 x 8-12.','Shoulder Press: 2 x 10-12.','Plank: 3 x 20-45 giây.']},
      {h:'5. Cách tăng tiến trong 8 tuần',p:['Tuần 1-2 tập trung kỹ thuật và tìm mức tạ. Tuần 3-4 cố gắng tăng số lần lặp trong cùng mức tạ. Tuần 5-6 nếu đã đạt đầu trên của khoảng lặp ở hầu hết các hiệp, tăng mức tạ nhỏ. Tuần 7-8 tiếp tục quá trình nhưng không cần tăng ở mọi bài cùng lúc.','Hãy ghi lại bài tập, mức tạ và số lần lặp. Nhật ký tập luyện là công cụ đơn giản nhưng cực kỳ hữu ích để biết bạn có thật sự tiến bộ hay chỉ tập theo cảm giác.']},
      {h:'6. Những dấu hiệu nên giảm cường độ',p:['Đau cơ nhẹ sau tập là thường gặp, nhưng đau nhói ở khớp, chóng mặt, đau ngực, khó thở bất thường hoặc cảm giác sắp ngất không phải tín hiệu để cố vượt qua. Nếu xuất hiện các dấu hiệu đáng lo, nên dừng tập và tìm đánh giá phù hợp.','Một chương trình tốt không chỉ khiến bạn mệt; nó phải cho phép bạn phục hồi và tiếp tục tập đều đặn.']}
    ])
  },
  {
    id:2, category:'DINH DƯỠNG', title:'Protein cho người tập gym: hiểu đúng, ăn đủ và phân bổ hợp lý trong ngày', icon:'PRO',
    excerpt:'Giải thích vai trò của protein, cách chọn nguồn thực phẩm và cách xây bữa ăn thực tế mà không phụ thuộc vào thực phẩm bổ sung.',
    content: article([
      {h:'1. Protein không chỉ dành cho người muốn “to cơ”',p:['Protein cung cấp các amino acid cần cho nhiều cấu trúc và quá trình trong cơ thể. Với người tập sức mạnh, protein đặc biệt liên quan đến quá trình sửa chữa và thích nghi của mô cơ sau vận động.','Tuy nhiên, chỉ tăng protein mà tổng năng lượng, giấc ngủ và chương trình tập không phù hợp thì kết quả vẫn hạn chế. Protein là một phần của hệ thống, không phải “nút bấm tăng cơ”.']},
      {h:'2. Nguồn protein dễ dùng trong bữa ăn Việt Nam',p:['Bạn có thể nhận protein từ thực phẩm động vật lẫn thực vật. Nguồn động vật thường có mật độ protein cao, còn nguồn thực vật có thể kết hợp đa dạng để tăng chất lượng khẩu phần.'],list:['Trứng, sữa, sữa chua.','Cá, tôm, thịt gà, thịt nạc.','Đậu hũ, đậu nành, các loại đậu.','Yến mạch, hạt và ngũ cốc là nguồn bổ sung thêm.']},
      {h:'3. Phân bổ protein thay vì dồn hết vào một bữa',p:['Một lỗi phổ biến là bữa sáng gần như không có protein, trưa vừa phải và tối ăn rất nhiều. Cách dễ áp dụng hơn là đưa một nguồn protein rõ ràng vào 3-4 bữa trong ngày.','Ví dụ: sáng có trứng/sữa chua, trưa có cá hoặc thịt nạc, bữa phụ có sữa, tối có đậu hũ và thịt/cá tùy khẩu phần.']},
      {h:'4. Protein powder có bắt buộc không?',p:['Không. Whey hoặc các loại bột protein chỉ là thực phẩm tiện lợi giúp bổ sung protein khi khó đạt nhu cầu từ bữa ăn. Nếu khẩu phần thực phẩm đã đáp ứng tốt, bạn không bắt buộc phải dùng.','Khi lựa chọn sản phẩm đóng gói, nên đọc thành phần, lượng protein mỗi khẩu phần và các chất bổ sung khác thay vì chỉ dựa vào quảng cáo.']},
      {h:'5. Đừng quên carbohydrate, chất béo và rau quả',p:['Tập luyện cần năng lượng. Carbohydrate hỗ trợ hoạt động cường độ cao, chất béo cần cho nhiều chức năng sinh học, còn rau quả cung cấp chất xơ và vi chất.','Một chế độ chỉ tập trung vào protein nhưng thiếu các nhóm khác thường khó duy trì lâu dài và có thể làm chất lượng bữa ăn giảm.']},
      {h:'6. Cách xây một đĩa ăn đơn giản',p:['Một cách trực quan là dành một phần đĩa cho nguồn protein, một phần cho rau, phần còn lại cho tinh bột phù hợp mức vận động và thêm một lượng chất béo vừa phải.','Người có bệnh thận, bệnh chuyển hóa hoặc vấn đề sức khỏe đặc thù nên trao đổi với chuyên gia y tế/dinh dưỡng trước khi thay đổi khẩu phần protein đáng kể.']}
    ])
  },
  {
    id:3, category:'CHẠY BỘ', title:'Cách chọn giày chạy bộ phù hợp: size, độ đệm, độ bám và mục đích sử dụng', icon:'RUN',
    excerpt:'Một hướng dẫn thực tế để chọn giày theo kiểu chạy, bàn chân và cảm giác khi thử thay vì chỉ nhìn thương hiệu.',
    content: article([
      {h:'1. Bắt đầu từ mục đích sử dụng',p:['Giày chạy hằng ngày, giày tốc độ và giày trail có thiết kế khác nhau. Nếu bạn mới chạy và chủ yếu chạy đường nhựa 3-10 km, một đôi daily trainer êm, ổn định và bền thường thực tế hơn giày chuyên thi đấu.','Nếu chạy địa hình, đế ngoài và độ bám trở nên quan trọng hơn. Nếu chạy nhanh, trọng lượng và độ phản hồi có thể được ưu tiên.']},
      {h:'2. Size chạy bộ không nhất thiết giống giày đi chơi',p:['Khi chạy, bàn chân có thể nở nhẹ và trượt về phía trước. Một đôi quá sát mũi dễ gây cấn ngón và móng. Hãy thử giày vào cuối ngày, mang loại vớ bạn thường chạy và kiểm tra không gian phía trước các ngón.','Gót cần được giữ tương đối chắc nhưng không gây ép đau. Phần giữa bàn chân nên ôm ổn định mà không tạo điểm nóng.']},
      {h:'3. Độ đệm: nhiều hơn không phải lúc nào cũng tốt hơn',p:['Đệm dày thường tạo cảm giác êm nhưng độ ổn định còn phụ thuộc hình học đế, độ rộng nền và độ cứng vật liệu. Người mới nên ưu tiên cảm giác tự nhiên và ổn định khi đi/chạy thử hơn là chỉ nhìn chiều cao đế.']},
      {h:'4. Kiểm tra độ bám và bề mặt chạy',p:['Nếu thường chạy đường ướt hoặc công viên, hãy quan sát phần cao su dưới đế và rãnh bám. Giày trail thường có lug sâu hơn nhưng không nhất thiết thoải mái trên đường nhựa dài.']},
      {h:'5. Cách thử tại cửa hàng',p:['Đi bộ nhanh, jog vài phút nếu được phép, thử đổi hướng nhẹ và chú ý các điểm cấn. Đừng mua một đôi khiến bạn phải tự thuyết phục rằng “mang vài hôm sẽ hết đau”.','So sánh hai mẫu cùng lúc thường dễ nhận khác biệt hơn so với thử cách nhau quá lâu.']},
      {h:'6. Khi nào nên thay giày?',p:['Không có một con số kilomet áp dụng cho tất cả. Hãy quan sát đế ngoài mòn lệch, đệm mất độ đàn hồi rõ rệt, upper rách hoặc cảm giác chạy thay đổi đáng kể.','Nếu xuất hiện đau mới kéo dài, đừng vội kết luận do giày; tải tập, kỹ thuật, bề mặt và phục hồi đều có thể liên quan.']}
    ])
  },
  {
    id:4, category:'TẬP LUYỆN', title:'10 bài tập tăng sức mạnh tại nhà không cần máy tập', icon:'HOME',
    excerpt:'Một chương trình toàn thân dùng trọng lượng cơ thể và đồ dùng đơn giản, phù hợp người muốn tập tại nhà.',
    content: article([
      {h:'1. Nguyên tắc để tập tại nhà vẫn tiến bộ',p:['Thiếu máy tập không có nghĩa là thiếu khả năng tăng độ khó. Bạn có thể tăng số lần lặp, kéo dài thời gian hạ xuống, giảm thời gian nghỉ, dùng balo có trọng lượng hoặc chuyển sang biến thể một chân/một tay.','Điều quan trọng là theo dõi độ khó và tiến triển có hệ thống thay vì mỗi ngày tập một video khác nhau.']},
      {h:'2. Nhóm chân',p:['Bodyweight squat là nền tảng. Split squat và reverse lunge tăng yêu cầu mỗi chân. Glute bridge tập trung nhiều hơn vào hông và mông.'],list:['Squat: 3 x 12-20.','Reverse lunge: 3 x 8-12 mỗi bên.','Split squat: 3 x 8-12 mỗi bên.','Glute bridge: 3 x 12-20.']},
      {h:'3. Nhóm đẩy',p:['Push-up có thể điều chỉnh rất rộng. Người mới chống tay lên bàn; người khỏe hơn dùng chống đẩy chuẩn, tempo chậm hoặc kê chân cao.'],list:['Incline push-up: 3 x 8-15.','Push-up: 3 x số lần kỹ thuật đẹp.','Pike push-up: 2-3 x 6-12.']},
      {h:'4. Nhóm kéo - bài khó nhất khi tập tại nhà',p:['Nếu có xà cửa chắc chắn, pull-up/row là lựa chọn tốt. Nếu không, bạn có thể dùng dây kháng lực hoặc balo để bent-over row. Không nên kéo vào đồ nội thất không chắc chắn.']},
      {h:'5. Core',p:['Core không chỉ là gập bụng. Plank, dead bug và side plank dạy cơ thể kiểm soát thân người trong khi tay/chân di chuyển.'],list:['Dead bug: 3 x 8-12 mỗi bên.','Plank: 3 x 20-60 giây.','Side plank: 2-3 x 20-45 giây mỗi bên.']},
      {h:'6. Gợi ý lịch 3 buổi',p:['Buổi A: squat, push-up, row, glute bridge, dead bug. Buổi B: split squat, pike push-up, row, hip hinge với balo, side plank. Luân phiên A-B-A rồi tuần sau B-A-B.','Nếu bài trở nên quá dễ, hãy tăng độ khó biến thể trước khi tăng số lượng vô hạn.']}
    ])
  },
  {
    id:5, category:'CARDIO', title:'Cardio bao nhiêu phút mỗi ngày là phù hợp? Cách chia thời lượng theo mục tiêu', icon:'CARDIO',
    excerpt:'Hiểu cách bố trí cardio cho sức khỏe, giảm mỡ và sức bền mà không làm ảnh hưởng quá nhiều đến phục hồi.',
    content: article([
      {h:'1. Không cần cardio mỗi ngày mới có lợi',p:['Tổng mức vận động theo tuần quan trọng hơn việc ép bản thân cardio đủ một con số mỗi ngày. Bạn có thể chia thành nhiều buổi ngắn hoặc vài buổi dài tùy lịch.','Đi bộ nhanh, đạp xe, bơi, chạy, máy elliptical đều có thể đóng góp nếu cường độ phù hợp.']},
      {h:'2. Phân biệt cardio nhẹ và cardio nặng',p:['Cardio nhẹ đến vừa thường cho phép bạn nói câu ngắn khá thoải mái. Cardio cường độ cao khiến nói chuyện khó hơn và cần phục hồi nhiều hơn.','Người mới nên xây nền với phần lớn thời gian ở mức dễ-vừa trước khi tăng nhiều interval nặng.']},
      {h:'3. Nếu mục tiêu là giảm mỡ',p:['Cardio giúp tăng tiêu hao năng lượng, nhưng chế độ ăn và tổng vận động cả ngày vẫn rất quan trọng. Việc thêm quá nhiều cardio nhưng bù lại bằng ăn nhiều hơn hoặc giảm vận động ngoài buổi tập có thể làm kết quả không như mong đợi.']},
      {h:'4. Nếu đang tập tạ',p:['Có thể tách cardio nặng và buổi chân nặng ra xa nhau nếu thấy hiệu suất giảm. Cardio nhẹ sau buổi tạ hoặc vào ngày riêng thường dễ bố trí hơn.']},
      {h:'5. Mẫu khởi đầu thực tế',p:['Người ít vận động có thể bắt đầu 15-20 phút đi bộ nhanh 3-4 buổi/tuần, sau đó tăng dần lên 25-40 phút tùy khả năng.','Nếu có đau ngực, chóng mặt, khó thở bất thường hoặc triệu chứng đáng lo khi vận động, nên dừng và tìm đánh giá y tế phù hợp.']}
    ])
  },
  {
    id:6, category:'KỸ THUẬT', title:'Squat đúng kỹ thuật: cách đặt chân, kiểm soát thân người và sửa lỗi thường gặp', icon:'SQ',
    excerpt:'Phân tích squat theo nguyên tắc chuyển động để bạn tự điều chỉnh theo cấu trúc cơ thể và mục tiêu.',
    content: article([
      {h:'1. Không tồn tại một tư thế squat giống hệt cho tất cả',p:['Độ rộng chân và góc mũi chân có thể khác nhau do cấu trúc hông, chiều dài xương và biến thể squat. Mục tiêu là tìm tư thế cho phép bạn giữ thăng bằng, kiểm soát bàn chân và xuống độ sâu phù hợp mà không gây đau.']},
      {h:'2. Bắt đầu từ bàn chân',p:['Giữ ba điểm tiếp xúc: gót, gốc ngón cái và gốc ngón út. Đừng để trọng lượng dồn hoàn toàn vào gót hoặc mũi. Khi hạ xuống, đầu gối có thể đi về hướng cùng với mũi chân.']},
      {h:'3. Thân người có thể nghiêng',p:['Squat không bắt buộc thân phải thẳng đứng tuyệt đối. Góc thân phụ thuộc kiểu squat và tỷ lệ cơ thể. Điều quan trọng là giữ cột sống được kiểm soát và đường tạ ổn định nếu có tải.']},
      {h:'4. Những lỗi phổ biến',p:['Gối sụp vào trong mạnh, gót nhấc lên, mất thăng bằng, cố xuống quá sâu dù vùng lưng/hông mất kiểm soát và tăng tạ quá nhanh là các lỗi thường gặp.'],list:['Giảm tạ và giảm độ sâu nếu kỹ thuật mất ổn định.','Dùng box squat để học kiểm soát độ sâu.','Goblet squat thường dễ học hơn back squat cho người mới.']},
      {h:'5. Đau không phải là phần bắt buộc của squat',p:['Nếu squat gây đau nhói hoặc đau tăng dần ở đầu gối, hông hay lưng, không nên cố “đẩy qua”. Hãy giảm tải/biên độ, thử biến thể khác và tìm hỗ trợ chuyên môn nếu triệu chứng kéo dài.']}
    ])
  },
  {
    id:7, category:'TẬP LUYỆN', title:'7 lỗi phổ biến khi tập gym khiến bạn khó tiến bộ dù đi tập rất đều', icon:'ERR',
    excerpt:'Những sai lầm về chương trình, mức tạ, kỹ thuật và phục hồi thường làm người tập “đứng yên” trong nhiều tháng.',
    content: article([
      {h:'1. Đổi lịch liên tục',p:['Nếu tuần nào cũng đổi bài, bạn khó biết sức mạnh có tăng hay không. Hãy giữ các bài chính đủ lâu để đánh giá tiến bộ, chỉ thay khi có lý do như đau, chán kéo dài hoặc mục tiêu thay đổi.']},
      {h:'2. Tập mọi hiệp đến thất bại',p:['Tập đến thất bại có thể hữu ích trong một số tình huống nhưng không cần ở mọi hiệp. Nó tăng mệt mỏi và có thể làm chất lượng các bài sau giảm mạnh.']},
      {h:'3. Không ghi lại số liệu',p:['Không ghi mức tạ và rep khiến bạn dễ lặp lại cùng hiệu suất hàng tháng. Một ghi chú đơn giản trên điện thoại đã đủ.']},
      {h:'4. Chỉ tập nhóm cơ thích',p:['Bỏ chân, lưng hoặc các mẫu kéo lâu dài tạo chương trình mất cân bằng. Một lịch tốt nên bao phủ các mẫu chuyển động chính.']},
      {h:'5. Tăng tạ quá nhanh',p:['Progressive overload không đồng nghĩa mỗi tuần phải thêm nhiều kilogram. Bạn có thể tăng rep, cải thiện biên độ, tempo hoặc kỹ thuật trước khi thêm tạ.']},
      {h:'6. Ngủ quá ít',p:['Thiếu ngủ thường khiến cảm giác gắng sức tăng, động lực giảm và khả năng phục hồi kém. Nếu lịch sống đang căng thẳng, giảm một chút volume có thể thực tế hơn cố giữ lịch nặng.']},
      {h:'7. Đánh giá tiến bộ chỉ bằng cân nặng',p:['Cân nặng biến động theo nước, glycogen và nhiều yếu tố. Hãy kết hợp ảnh, vòng đo, mức tạ, rep, cảm giác vận động và tính nhất quán.']}
    ])
  },
  {
    id:8, category:'PHỤC HỒI', title:'Phục hồi cơ bắp sau tập: ngủ, dinh dưỡng, vận động nhẹ và cách dùng foam roller', icon:'REC',
    excerpt:'Một quy trình phục hồi thực tế giúp bạn quay lại buổi tập tiếp theo với chất lượng tốt hơn.',
    content: article([
      {h:'1. Phục hồi bắt đầu ngay từ cách bạn lập chương trình',p:['Không có kỹ thuật phục hồi nào bù được một lịch tập vượt quá khả năng thích nghi. Volume, cường độ và tần suất cần phù hợp kinh nghiệm và cuộc sống của bạn.']},
      {h:'2. Giấc ngủ là nền tảng',p:['Cố giữ thời gian ngủ tương đối ổn định, giảm ánh sáng mạnh và caffeine quá muộn nếu chúng ảnh hưởng giấc ngủ. Chất lượng ngủ thường quan trọng hơn các “mẹo recovery” đắt tiền.']},
      {h:'3. Ăn đủ và uống đủ',p:['Sau tập, một bữa có protein, carbohydrate và nước giúp hỗ trợ phục hồi. Không cần lao vào ăn trong vài phút đầu; tổng khẩu phần cả ngày quan trọng hơn.']},
      {h:'4. Active recovery',p:['Đi bộ, đạp xe rất nhẹ hoặc mobility ngắn có thể giúp bạn cảm thấy dễ chịu hơn trong ngày nghỉ. Mục tiêu không phải biến ngày nghỉ thành một buổi cardio nặng.']},
      {h:'5. Foam roller dùng thế nào?',p:['Lăn chậm vùng cơ lớn 30-90 giây mỗi vùng, tránh đè trực tiếp vào khớp/xương hoặc vị trí đau cấp. Foam rolling có thể giúp cảm giác dễ chịu và biên độ vận động ngắn hạn nhưng không thay thế xử lý nguyên nhân chấn thương.']}
    ])
  },
  {
    id:9, category:'DINH DƯỠNG', title:'Uống nước khi tập thể thao: cách nhận biết thiếu nước và xây thói quen phù hợp', icon:'H2O',
    excerpt:'Hướng dẫn thực tế về nước trước, trong và sau vận động mà không biến thành những con số cứng nhắc.',
    content: article([
      {h:'1. Nhu cầu nước thay đổi rất nhiều',p:['Khí hậu, lượng mồ hôi, thời lượng tập, quần áo và kích thước cơ thể đều ảnh hưởng nhu cầu nước. Vì vậy một con số cố định cho mọi người thường không chính xác.']},
      {h:'2. Trước khi tập',p:['Bắt đầu buổi tập trong trạng thái không quá khát. Nếu nước tiểu rất sẫm màu kéo dài, miệng khô và bạn ít đi tiểu, đó có thể là dấu hiệu cần chú ý bù nước, dù màu nước tiểu cũng chịu ảnh hưởng từ thực phẩm/thuốc.']},
      {h:'3. Trong khi tập',p:['Buổi ngắn trong môi trường mát có thể chỉ cần uống theo khát. Buổi dài, nóng và ra nhiều mồ hôi cần chủ động hơn. Không nên cố uống lượng nước cực lớn trong thời gian ngắn.']},
      {h:'4. Điện giải khi nào có ý nghĩa?',p:['Khi vận động kéo dài, ra mồ hôi nhiều hoặc trong thời tiết nóng, sodium và các điện giải có thể hữu ích. Đối với một buổi gym ngắn thông thường, bữa ăn bình thường và nước thường đã đủ cho nhiều người.']},
      {h:'5. Sau tập',p:['Tiếp tục uống theo khát và ăn bữa bình thường. Nếu phải tập lại trong ngày, việc phục hồi nước và năng lượng trở nên quan trọng hơn.']}
    ])
  },
  {
    id:10, category:'LIFESTYLE', title:'Nên tập buổi sáng hay buổi tối? Cách chọn khung giờ giúp bạn duy trì lâu dài', icon:'TIME',
    excerpt:'So sánh ưu nhược điểm của các khung giờ và cách chọn thời điểm phù hợp lịch sống.',
    content: article([
      {h:'1. Thời điểm tốt nhất là thời điểm bạn duy trì được',p:['Nếu tập sáng khiến bạn bỏ cuộc vì thiếu ngủ, nó không còn là lựa chọn tốt. Nếu tập tối làm bạn thường xuyên kẹt công việc, hãy thử sáng hoặc trưa. Tính nhất quán thường quan trọng hơn việc tìm “khung giờ sinh học hoàn hảo”.']},
      {h:'2. Tập sáng',p:['Ưu điểm là hoàn thành trước khi công việc phát sinh. Nhược điểm là cần ngủ sớm và cơ thể có thể cứng hơn sau khi thức dậy. Hãy dành khởi động kỹ hơn nếu cần.']},
      {h:'3. Tập chiều/tối',p:['Nhiều người cảm thấy mạnh và linh hoạt hơn sau một ngày hoạt động. Tuy nhiên phòng gym có thể đông và một buổi tập rất nặng quá sát giờ ngủ có thể khiến một số người khó thư giãn.']},
      {h:'4. Ăn uống quanh buổi tập',p:['Buổi sáng sớm có thể tập sau bữa nhẹ hoặc sau khi thức dậy tùy cơ địa và cường độ. Buổi chiều nên tránh ăn một bữa quá lớn sát thời điểm tập nếu dễ khó chịu tiêu hóa.']},
      {h:'5. Cách thử nghiệm',p:['Chọn một khung giờ và giữ 2-3 tuần. Ghi lại mức năng lượng, số buổi hoàn thành và chất lượng ngủ. Dữ liệu cá nhân của bạn hữu ích hơn tranh luận chung trên mạng.']}
    ])
  },
  {
    id:11, category:'CORE', title:'7 bài tập bụng và core tại nhà: từ người mới đến mức trung bình', icon:'CORE',
    excerpt:'Không cần hàng trăm lần gập bụng; hãy học cách chống duỗi, chống xoay và kiểm soát thân người.',
    content: article([
      {h:'1. Core làm gì?',p:['Core giúp truyền lực giữa thân trên và thân dưới và hỗ trợ kiểm soát cột sống. Vì vậy chương trình core nên có nhiều kiểu nhiệm vụ thay vì chỉ flexion bằng crunch.']},
      {h:'2. Dead bug',p:['Nằm ngửa, ép nhẹ lưng về vị trí trung lập kiểm soát, hạ tay/chân đối bên mà không để lưng mất kiểm soát. 3 hiệp x 6-12 mỗi bên.']},
      {h:'3. Plank',p:['Siết mông và bụng, giữ thân thành một đường tương đối thẳng. Dừng khi bắt đầu võng lưng rõ rệt. 3 hiệp x 20-60 giây.']},
      {h:'4. Side plank',p:['Tập trung chống nghiêng thân. Có thể bắt đầu với gối chạm sàn rồi tăng lên chân duỗi. 2-3 hiệp mỗi bên.']},
      {h:'5. Bird dog',p:['Từ tư thế bốn điểm, duỗi tay và chân đối bên nhưng giữ hông ổn định. Đây là bài kiểm soát hơn là cố vươn xa nhất.']},
      {h:'6. Reverse crunch',p:['Cuộn nhẹ xương chậu thay vì vung chân. Chuyển động nhỏ nhưng kiểm soát giúp tập trung vùng bụng tốt hơn.']},
      {h:'7. Mountain climber chậm và suitcase carry',p:['Mountain climber chậm tập kiểm soát thân khi chân di chuyển. Nếu có tạ, suitcase carry là bài chống nghiêng hiệu quả.']},
      {h:'8. Lịch core 10 phút',p:['Chọn 3 bài, mỗi bài 30-40 giây, nghỉ 20-30 giây, lặp 3 vòng. Không cần tập core nặng mỗi ngày nếu bạn đã có squat, hinge, row và carry trong chương trình.']}
    ])
  },
  {
    id:12, category:'TÂM LÝ TẬP LUYỆN', title:'Cách duy trì động lực tập luyện khi bận rộn hoặc dễ bỏ cuộc', icon:'MIND',
    excerpt:'Biến việc tập thành hệ thống thay vì phụ thuộc vào cảm hứng.',
    content: article([
      {h:'1. Động lực không ổn định là bình thường',p:['Nếu lịch tập chỉ hoạt động khi bạn hứng thú, nó sẽ dễ vỡ. Hãy thiết kế lịch đủ đơn giản để vẫn làm được trong tuần bận rộn.']},
      {h:'2. Đặt mục tiêu hành vi',p:['Thay vì chỉ đặt “giảm 5 kg”, hãy đặt mục tiêu có thể hành động: đi tập 3 buổi/tuần, đi bộ 7.000 bước trung bình, chuẩn bị bữa trưa 4 ngày. Kết quả cơ thể chịu nhiều yếu tố, còn hành vi nằm trong tầm kiểm soát hơn.']},
      {h:'3. Quy tắc buổi tập tối thiểu',p:['Chuẩn bị phiên bản 20 phút cho ngày bận: squat, push, row, hinge và core. Nếu sau khởi động bạn có năng lượng, tập thêm; nếu không, bạn vẫn giữ được thói quen.']},
      {h:'4. Giảm ma sát',p:['Chuẩn bị quần áo từ tối, chọn gym gần nhà/công ty, lưu sẵn lịch tập và tránh quyết định quá nhiều ngay trước giờ tập.']},
      {h:'5. Đo tiến bộ đúng cách',p:['Theo dõi số buổi hoàn thành, mức tạ và cảm giác thể lực. Nhìn thấy quá trình tiến bộ giúp tạo động lực nội tại tốt hơn chỉ chờ thay đổi ngoại hình.']}
    ])
  },
  {
    id:13, category:'LỊCH TẬP', title:'Lịch tập gym 5 ngày: cách bố trí nhóm cơ để vừa tiến bộ vừa có thời gian phục hồi', icon:'5DAY',
    excerpt:'Một mẫu 5 ngày thực tế với cách điều chỉnh volume theo kinh nghiệm.',
    content: article([
      {h:'1. 5 buổi không tự động tốt hơn 3-4 buổi',p:['Lịch 5 ngày phù hợp khi bạn có thời gian, ngủ và dinh dưỡng tương đối ổn. Nếu thường xuyên bỏ 2 buổi, lịch 3 ngày bạn thực hiện đủ có thể hiệu quả hơn.']},
      {h:'2. Mẫu Upper/Lower + Push/Pull/Legs',p:['Một bố trí dễ dùng: Thứ 2 Upper, Thứ 3 Lower, Thứ 4 nghỉ, Thứ 5 Push, Thứ 6 Pull, Thứ 7 Legs, Chủ nhật nghỉ. Cách này tạo hai lần kích thích mỗi tuần cho nhiều nhóm cơ.']},
      {h:'3. Volume',p:['Không cần cố nhồi quá nhiều bài mỗi buổi. Với người trung bình, mỗi nhóm cơ có thể được phân bổ nhiều hiệp qua tuần thay vì dồn tất cả vào một ngày. Hãy tăng volume khi bạn đang phục hồi tốt và thực sự cần thêm kích thích.']},
      {h:'4. Bài chính và bài phụ',p:['Bài compound như squat, press, row, hinge có thể đặt đầu buổi. Bài isolation như lateral raise, curl, extension đặt sau để bổ sung.']},
      {h:'5. Deload và tuần bận',p:['Nếu mệt kéo dài, hiệu suất giảm nhiều buổi và giấc ngủ kém, có thể giảm volume hoặc cường độ tạm thời. Không nhất thiết phải “cố đủ 5 ngày” bằng mọi giá.']}
    ])
  },
  {
    id:14, category:'KHỞI ĐỘNG', title:'Khởi động trước khi tập: 8-12 phút làm gì để vừa đủ mà không bị mệt trước bài chính', icon:'WARM',
    excerpt:'Một cấu trúc warm-up từ tăng nhiệt cơ thể đến set khởi động chuyên biệt.',
    content: article([
      {h:'1. Mục tiêu của warm-up',p:['Khởi động nên giúp bạn sẵn sàng cho bài sắp làm, không phải biến thành một buổi cardio riêng. Bạn muốn tăng nhiệt độ cơ thể, kiểm tra cảm giác vận động và chuẩn bị kỹ thuật.']},
      {h:'2. 3-5 phút đầu',p:['Đi bộ nhanh, đạp xe hoặc rowing nhẹ. Mức vừa đủ để cơ thể ấm lên nhưng vẫn nói chuyện bình thường.']},
      {h:'3. Mobility có chọn lọc',p:['Nếu squat bị hạn chế do cổ chân cứng, thêm ankle mobility. Nếu upper body, có thể dùng band pull-apart hoặc scapular movement. Không cần kéo giãn toàn thân dài trước mọi buổi.']},
      {h:'4. Ramp-up set',p:['Đây là phần quan trọng nhất trước bài nặng. Ví dụ squat: thanh không, sau đó 40%, 60%, 75% mức làm việc với số rep giảm dần. Mục tiêu làm quen tải mà không gây mệt.']},
      {h:'5. Warm-up cá nhân hóa',p:['Nếu một buổi khởi động 20 phút làm bạn kiệt sức, hãy rút gọn. Nếu bạn cần lâu hơn vì cơ thể cứng hoặc trời lạnh, hãy điều chỉnh.']}
    ])
  },
  {
    id:15, category:'CHẠY BỘ', title:'Tăng sức bền chạy bộ: xây nền aerobic, tăng quãng đường và tránh tăng tải quá nhanh', icon:'END',
    excerpt:'Lộ trình giúp người mới chạy lâu hơn mà không cần biến mọi buổi thành chạy hết sức.',
    content: article([
      {h:'1. Chạy chậm là phần quan trọng',p:['Nhiều người mới chạy mỗi buổi đều ở mức khó, khiến hồi phục chậm và nhanh chán. Phần lớn buổi chạy nền nên ở mức dễ-vừa để bạn tích lũy thời gian vận động.']},
      {h:'2. Run-walk là chiến lược tốt',p:['Xen kẽ 2-4 phút chạy với 1 phút đi bộ có thể giúp tích lũy thời gian mà kỹ thuật ít xuống hơn. Theo tuần, tăng thời gian chạy và giảm thời gian đi bộ.']},
      {h:'3. Tăng tải dần',p:['Đừng tăng đồng thời quãng đường, tốc độ và số buổi quá nhanh. Thường nên ưu tiên tăng một biến chính rồi quan sát phản ứng.']},
      {h:'4. Một tuần mẫu',p:['Buổi 1 chạy dễ 25-35 phút, buổi 2 interval nhẹ ngắn, buổi 3 chạy dễ dài hơn. Thêm 1-2 buổi sức mạnh chân và core có thể hỗ trợ khả năng chịu tải.']},
      {h:'5. Khi cần giảm tải',p:['Đau tăng dần qua nhiều buổi, thay đổi dáng chạy vì đau hoặc mệt mỏi kéo dài là lý do để giảm tải và đánh giá lại thay vì cố hoàn thành kế hoạch bằng mọi giá.']}
    ])
  },
  {
    id:16, category:'PHỤC HỒI', title:'Có nên tập gym mỗi ngày? Phân biệt vận động hằng ngày với tập nặng hằng ngày', icon:'7D',
    excerpt:'Bạn có thể hoạt động mỗi ngày nhưng không nhất thiết phải đặt cơ thể vào buổi tập nặng mỗi ngày.',
    content: article([
      {h:'1. “Tập mỗi ngày” có nhiều nghĩa',p:['Đi bộ, mobility hoặc đạp xe nhẹ mỗi ngày khác rất nhiều so với 7 buổi resistance training nặng. Khi nói về tần suất, cần nhìn loại vận động, volume và cường độ.']},
      {h:'2. Người mới thường không cần 7 buổi gym',p:['3-4 buổi có cấu trúc thường đủ để xây nền sức mạnh và kỹ thuật. Ngày còn lại có thể đi bộ hoặc vận động nhẹ.']},
      {h:'3. Dấu hiệu lịch đang quá tải',p:['Hiệu suất giảm liên tục, đau cơ kéo dài, mất hứng thú, giấc ngủ xấu hơn và cảm giác mệt trong sinh hoạt có thể cho thấy cần xem lại tải tập. Những dấu hiệu này không đặc hiệu nhưng hữu ích khi nhìn cùng nhau.']},
      {h:'4. Khi nào 5-6 buổi hợp lý?',p:['Người có kinh nghiệm có thể chia volume thành nhiều buổi ngắn hơn. Tần suất cao không nhất thiết đồng nghĩa tổng volume cực cao.']},
      {h:'5. Nghỉ không phải lười',p:['Ngày nghỉ là phần của chương trình. Khả năng thích nghi xảy ra trong quá trình phục hồi sau kích thích tập luyện.']}
    ])
  },
  {
    id:17, category:'PHỤ KIỆN', title:'Cách chọn găng tay tập gym: khi nào hữu ích, chọn size và chất liệu thế nào', icon:'GRIP',
    excerpt:'Găng tay không bắt buộc, nhưng có thể tăng sự thoải mái và độ bám cho một số người.',
    content: article([
      {h:'1. Găng tay có tác dụng gì?',p:['Găng có thể giảm ma sát trực tiếp, thấm mồ hôi và tạo cảm giác bám tốt hơn. Tuy nhiên nó không thay thế hoàn toàn grip strength và không phải ai cũng cần.']},
      {h:'2. Chọn size',p:['Găng quá rộng dễ nhăn và trượt; quá chật có thể cấn ngón. Hãy đo vòng lòng bàn tay theo hướng dẫn hãng nếu mua online.']},
      {h:'3. Chất liệu',p:['Lòng tay synthetic leather hoặc vật liệu có ma sát cao thường bền và dễ lau. Vải mesh ở mu tay giúp thoáng. Quai cổ tay cần vừa đủ, không siết quá chặt.']},
      {h:'4. Găng và straps khác nhau',p:['Strap hỗ trợ grip ở các bài kéo nặng khi cẳng tay giới hạn. Găng chủ yếu tăng thoải mái và giảm ma sát. Hai món không hoàn toàn cùng chức năng.']},
      {h:'5. Vệ sinh',p:['Găng giữ mồ hôi nên cần hong khô sau tập và giặt theo hướng dẫn vật liệu để hạn chế mùi và xuống cấp.']}
    ])
  },
  {
    id:18, category:'TẬP TẠI NHÀ', title:'Dây kháng lực: 12 bài tập toàn thân và cách chọn mức lực phù hợp', icon:'BAND',
    excerpt:'Một bộ dây nhỏ nhưng có thể dùng cho mông, lưng, vai, tay và bài activation.',
    content: article([
      {h:'1. Chọn mức lực',p:['Mức lực phù hợp cho phép bạn kiểm soát cả chiều kéo ra và chiều trở về. Nếu dây kéo bạn bật ngược hoặc biên độ giảm rất nhiều, hãy dùng mức nhẹ hơn.']},
      {h:'2. Nhóm thân dưới',p:['Band squat, lateral walk, glute bridge abduction và standing hip abduction là các lựa chọn dễ triển khai. Mini band thường phù hợp cho các bài quanh gối/hông.']},
      {h:'3. Nhóm lưng',p:['Seated band row, lat pulldown với điểm neo chắc và straight-arm pulldown giúp tạo mẫu kéo. Luôn kiểm tra điểm neo trước khi kéo mạnh.']},
      {h:'4. Ngực và vai',p:['Band chest press, overhead press, lateral raise và face pull có thể điều chỉnh bằng vị trí đứng hoặc mức dây.']},
      {h:'5. Tay',p:['Band biceps curl và triceps pressdown là hai bài đơn giản, dễ cảm nhận lực liên tục.']},
      {h:'6. Circuit 20 phút',p:['Chọn squat, row, chest press, Romanian deadlift với dây, lateral raise và dead bug. Làm 10-15 rep mỗi bài, nghỉ ngắn, lặp 3 vòng.']}
    ])
  },
  {
    id:19, category:'DINH DƯỠNG', title:'Thực phẩm tốt cho người tập gym: cách xây danh sách mua sắm một tuần', icon:'FOOD',
    excerpt:'Từ protein, tinh bột, chất béo đến rau quả: một danh sách đơn giản để bữa ăn dễ chuẩn bị và dễ duy trì.',
    content: article([
      {h:'1. Đừng mua theo “thực phẩm thần kỳ”',p:['Không một thực phẩm riêng lẻ quyết định kết quả tập. Hãy xây giỏ hàng có đủ nhóm và ưu tiên món bạn thực sự ăn được lâu dài.']},
      {h:'2. Nguồn protein',p:['Trứng, sữa chua, sữa, thịt gà, cá, thịt nạc, đậu hũ và các loại đậu là lựa chọn phổ biến. Có thể chọn theo ngân sách và khẩu vị.']},
      {h:'3. Nguồn carbohydrate',p:['Cơm, khoai, yến mạch, bánh mì, bún/phở và trái cây đều có thể nằm trong chế độ ăn. Khối lượng điều chỉnh theo tổng nhu cầu năng lượng.']},
      {h:'4. Rau quả',p:['Mua nhiều màu sắc giúp khẩu phần đa dạng. Rau đông lạnh cũng có thể là lựa chọn tiện khi khó đi chợ thường xuyên.']},
      {h:'5. Chất béo',p:['Cá béo, hạt, bơ hạt, dầu thực vật và trứng là các nguồn dễ dùng. Mật độ năng lượng của chất béo cao nên khẩu phần cần phù hợp mục tiêu.']},
      {h:'6. Mẫu chuẩn bị bữa',p:['Nấu sẵn 2 nguồn protein, 1-2 loại tinh bột và rửa/chia rau cho 2-3 ngày giúp giảm quyết định khi bận. Thay sốt và gia vị để tránh nhàm chán.']}
    ])
  },
  {
    id:20, category:'MOBILITY', title:'Stretching sau tập có tác dụng gì? Khi nào nên kéo giãn và khi nào không cần cố', icon:'FLEX',
    excerpt:'Phân biệt stretching để thư giãn, cải thiện biên độ vận động và điều trị chấn thương.',
    content: article([
      {h:'1. Stretching không phải “xóa axit lactic”',p:['Cảm giác đau cơ sau tập liên quan nhiều cơ chế khác nhau và stretching không phải cách “đẩy axit lactic ra ngoài”. Kéo giãn có thể tạo cảm giác dễ chịu và hỗ trợ biên độ trong một số bối cảnh.']},
      {h:'2. Static stretching',p:['Giữ một vị trí kéo giãn 20-60 giây có thể dùng sau tập hoặc buổi mobility riêng. Không cần kéo đến mức đau. Cảm giác căng vừa phải thường đủ.']},
      {h:'3. Dynamic mobility',p:['Các chuyển động có kiểm soát như leg swing, thoracic rotation hoặc deep squat transition thường phù hợp trước buổi tập hơn việc giữ kéo giãn lâu.']},
      {h:'4. Muốn tăng flexibility cần tính nhất quán',p:['Một vài phút sau mỗi buổi có thể hữu ích, nhưng cải thiện biên độ rõ ràng cần tập đều trong nhiều tuần. Strength training qua biên độ tốt cũng có thể góp phần cải thiện khả năng vận động.']},
      {h:'5. Đừng kéo giãn vào cơn đau sắc',p:['Nếu một vị trí gây đau nhói, tê hoặc triệu chứng lan, không nên cố kéo mạnh. Đó không phải tình huống để áp dụng nguyên tắc “càng đau càng hiệu quả”.']}
    ])
  }
];

blogs.forEach((b,i)=>{ b.image = makeSportImage({title:b.title,subtitle:b.excerpt,seed:900+i*13,kind:'blog',icon:b.icon}); });
/* =========================================================
   HỆ THỐNG ẢNH THẬT - SPORTHUB
   Ghi đè ảnh SVG tự sinh bằng ảnh WebP thật
========================================================= */


/* =========================================================
   1. ẢNH SẢN PHẨM
========================================================= */

const realProductImages = [

    "images/banners/products/p01-ao-gym-performance.webp.webp",

    "images/banners/products/p02-giay-energy-runner.webp.webp",

    "images/banners/products/p03-gang-gym-progrip.webp.webp",

    "images/banners/products/p04-ta-dumbbell-10kg.webp.webp",

    "images/banners/products/p05-day-khang-luc.webp.webp",

    "images/banners/products/p06-tham-yoga.webp.webp",

    "images/banners/products/p07-quan-short-flexmove.webp.webp",

    "images/banners/products/p08-ao-khoac-active-wind.webp.webp",

    "images/banners/products/p09-binh-nuoc-1l.webp.webp",

    "images/banners/products/p12-foam-roller.webp.webp",

    "images/banners/products/p11-tui-gymbag.webp.webp",

    "images/banners/products/p10-giay-training-motion.webp"

];


products.forEach((product, index) => {

    if (realProductImages[index]) {

        product.image =
            realProductImages[index];

    }

});


/* =========================================================
   2. ẢNH BLOG
========================================================= */

const realBlogImages = [

    // B01 - Gym cho người mới
    "images/blog/b01-gym-nguoi-moi.webp",

    // B02 - Protein
    "images/blog/b02-protein-tang-co.webp",

    // B03 - Chọn giày chạy bộ
    "images/blog/b03-chon-giay-chay-bo.webp",

    // B04 - Tập sức mạnh tại nhà
    "images/blog/b04-tap-suc-manh-tai-nha.webp",

    // B05 - Cardio
    "images/blog/b05-cardio.webp",

    // B06 - Squat đúng kỹ thuật
    "images/blog/b06-squat-dung-ky-thuat.webp",

    // B07 - Lỗi khi tập gym
    "images/blog/b07-loi-khi-tap-gym.webp",

    // B08 - Phục hồi cơ bắp
    "images/blog/b08-phuc-hoi-co-bap.webp",

    // B09 - Uống nước thể thao
    "images/blog/b09-uong-nuoc-the-thao.webp",

    // B10 - Tập sáng hay tối
    "images/blog/b10-tap-sang-hay-toi.webp",

    // B11 - Bài tập bụng
    "images/blog/b11-bai-tap-bung.webp",

    // B12 - Động lực tập luyện
    "images/blog/b12-dong-luc-tap-luyen.webp",

    // B13 - Lịch gym 5 ngày
    "images/blog/b13-lich-gym-5-ngay.webp",

    // B14 - Khởi động
    "images/blog/b14-khoi-dong.webp",

    // B15 - Tăng sức bền
    "images/blog/b15-tang-suc-ben.webp",

    // B16 - Tập gym mỗi ngày
    "images/blog/b16-tap-gym-moi-ngay.webp",

    // B17 - Chọn găng gym
    "images/blog/b17-chon-gang-gym.webp",

    // B18 - Bài tập dây kháng lực
    "images/blog/b18-bai-tap-day-khang-luc.webp",

    // B19 - Thực phẩm gym
    "images/blog/b19-thuc-pham-gym.webp",

    // B20 - Stretching
    "images/blog/b20-stretching.webp"

];


blogs.forEach((blog, index) => {

    if (realBlogImages[index]) {

        blog.image =
            realBlogImages[index];

    }

});
