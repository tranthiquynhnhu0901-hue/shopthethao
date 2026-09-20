/* =========================================================
   SPORTHUB WORKOUT ENGINE
   Version 1.0
========================================================= */

window.SportHubWorkoutEngine = (() => {


    /* =====================================================
       1. THƯ VIỆN BÀI TẬP
    ====================================================== */

    const exerciseLibrary = {


        /* =========================
           KNEE DOMINANT
        ========================== */

        gobletSquat: {

            name: "Goblet Squat",

            category: "Knee dominant",

            target:
                "Phát triển sức mạnh chân, đặc biệt cơ đùi trước và mông, đồng thời củng cố mẫu chuyển động squat.",

            sets: 3,

            reps: "8–12",

            rest: "75–90 giây",

            rpe: "RPE 6–7",

            rir:
                "Còn khoảng 3–4 lần lặp có thể thực hiện nếu buộc phải tiếp tục.",

            technique: [
                "Giữ tạ gần ngực.",
                "Đặt bàn chân ở vị trí tự nhiên và ổn định.",
                "Đầu gối di chuyển cùng hướng với mũi chân.",
                "Giữ bàn chân tiếp xúc ổn định với mặt đất.",
                "Chỉ hạ sâu đến mức vẫn kiểm soát tốt tư thế."
            ],

            mistakes: [
                "Gập lưng mạnh khi xuống.",
                "Đầu gối đổ vào trong.",
                "Mất thăng bằng ở bàn chân.",
                "Cố xuống quá sâu khi không còn kiểm soát."
            ],

            regression:
                "Bodyweight Squat hoặc Box Squat.",

            progression:
                "Tăng số lần lặp trong vùng 8–12 trước. Khi đạt 12 lần ở tất cả hiệp với kỹ thuật tốt và RPE phù hợp, tăng tải ở mức nhỏ nhất khả dụng.",

            stopCondition:
                "Dừng hoặc đổi bài nếu xuất hiện đau sắc, đau tăng dần, chóng mặt hoặc mất khả năng kiểm soát kỹ thuật."

        },


        bodyweightSquat: {

            name: "Bodyweight Squat",

            category: "Knee dominant",

            target:
                "Học và củng cố mẫu squat trước khi sử dụng tải ngoài.",

            sets: 3,

            reps: "10–15",

            rest: "60–75 giây",

            rpe: "RPE 5–7",

            rir:
                "Còn khoảng 3–5 lần lặp.",

            technique: [
                "Giữ thân người ổn định.",
                "Đầu gối đi cùng hướng mũi chân.",
                "Giữ gót chân tiếp xúc mặt đất.",
                "Kiểm soát cả pha xuống và pha đứng lên."
            ],

            mistakes: [
                "Đổ người quá nhiều về trước.",
                "Đầu gối đổ vào trong.",
                "Bật nhanh ở vị trí thấp.",
                "Mất cân bằng."
            ],

            regression:
                "Box Squat với ghế cao.",

            progression:
                "Tăng số lần lặp, sau đó chuyển sang Goblet Squat.",

            stopCondition:
                "Dừng khi đau gối tăng, đau lưng bất thường hoặc chóng mặt."

        },


        reverseLunge: {

            name: "Reverse Lunge",

            category: "Knee dominant",

            target:
                "Phát triển sức mạnh từng chân, khả năng kiểm soát hông và thăng bằng.",

            sets: 3,

            reps: "8–10 mỗi bên",

            rest: "75–90 giây",

            rpe: "RPE 6–7",

            rir:
                "Khoảng 3 lần lặp dự phòng.",

            technique: [
                "Bước chân ra sau có kiểm soát.",
                "Giữ thân người ổn định.",
                "Đầu gối chân trước đi theo hướng bàn chân.",
                "Đẩy qua bàn chân trước để trở về vị trí đầu."
            ],

            mistakes: [
                "Bước quá ngắn.",
                "Đầu gối đổ vào trong.",
                "Mất thăng bằng.",
                "Đẩy quá nhiều bằng chân sau."
            ],

            regression:
                "Split Squat có điểm tựa.",

            progression:
                "Tăng số lần lặp rồi mới thêm tải.",

            stopCondition:
                "Dừng nếu đau gối hoặc cổ chân tăng rõ rệt."

        },



        /* =========================
           HIP DOMINANT
        ========================== */

        romanianDeadlift: {

            name: "Romanian Deadlift",

            category: "Hip dominant",

            target:
                "Phát triển chuỗi sau gồm mông, gân kheo và khả năng kiểm soát hip hinge.",

            sets: 3,

            reps: "8–12",

            rest: "90–120 giây",

            rpe: "RPE 6–7",

            rir:
                "Còn khoảng 3 lần lặp.",

            technique: [
                "Giữ cột sống ở tư thế ổn định.",
                "Đẩy hông ra sau thay vì ngồi xổm.",
                "Giữ tải gần cơ thể.",
                "Hạ đến mức còn cảm nhận được gân kheo mà không mất tư thế."
            ],

            mistakes: [
                "Cong lưng khi hạ.",
                "Tạ đi xa khỏi cơ thể.",
                "Biến động tác thành squat.",
                "Hạ quá sâu dù lưng đã mất kiểm soát."
            ],

            regression:
                "Hip Hinge không tải hoặc Dumbbell RDL nhẹ.",

            progression:
                "Tăng reps trước, sau đó tăng tải nhỏ khi toàn bộ hiệp đạt đầu trên của rep range.",

            stopCondition:
                "Dừng nếu xuất hiện đau sắc ở lưng, tê lan hoặc mất kiểm soát thân người."

        },


        hipThrust: {

            name: "Hip Thrust / Glute Bridge",

            category: "Hip dominant",

            target:
                "Phát triển cơ mông và khả năng duỗi hông.",

            sets: 3,

            reps: "10–15",

            rest: "60–90 giây",

            rpe: "RPE 6–8",

            rir:
                "Còn khoảng 2–4 lần lặp.",

            technique: [
                "Giữ xương sườn và thân người kiểm soát.",
                "Đẩy hông lên bằng cơ mông.",
                "Không ngửa lưng quá mức ở điểm cao nhất.",
                "Hạ xuống có kiểm soát."
            ],

            mistakes: [
                "Ưỡn lưng quá mức.",
                "Đẩy bằng bàn chân quá xa.",
                "Không kiểm soát pha hạ."
            ],

            regression:
                "Glute Bridge trên sàn.",

            progression:
                "Tăng reps, giữ 1–2 giây ở vị trí co cơ hoặc tăng tải nhỏ.",

            stopCondition:
                "Dừng nếu đau lưng hoặc đau hông tăng."

        },



        /* =========================
           PUSH
        ========================== */

        pushUp: {

            name: "Push-up",

            category: "Push",

            target:
                "Phát triển cơ ngực, vai trước, tay sau và khả năng ổn định thân người.",

            sets: 3,

            reps: "6–12",

            rest: "75–90 giây",

            rpe: "RPE 6–8",

            rir:
                "Còn khoảng 2–4 lần lặp.",

            technique: [
                "Giữ thân người thành một đường tương đối thẳng.",
                "Đặt tay ở vị trí thoải mái.",
                "Hạ ngực có kiểm soát.",
                "Không để hông võng xuống."
            ],

            mistakes: [
                "Hông võng.",
                "Cổ rướn quá mức.",
                "Khuỷu tay mở quá rộng.",
                "Rút ngắn biên độ khi mệt."
            ],

            regression:
                "Incline Push-up hoặc Push-up trên tường.",

            progression:
                "Tăng reps, giảm độ cao của điểm tựa hoặc chuyển sang biến thể khó hơn.",

            stopCondition:
                "Dừng nếu đau vai, cổ tay hoặc ngực bất thường."

        },


        dumbbellPress: {

            name: "Dumbbell Chest Press",

            category: "Push",

            target:
                "Phát triển sức mạnh ngực, vai trước và tay sau.",

            sets: 3,

            reps: "8–12",

            rest: "90 giây",

            rpe: "RPE 6–8",

            rir:
                "Khoảng 2–4 lần lặp dự phòng.",

            technique: [
                "Giữ vai ổn định trên ghế.",
                "Hạ tạ có kiểm soát.",
                "Giữ cổ tay tương đối trung tính.",
                "Đẩy lên mà không bật tạ."
            ],

            mistakes: [
                "Hạ tạ quá nhanh.",
                "Để vai trượt ra trước.",
                "Cổ tay gập nhiều.",
                "Chọn tải quá nặng."
            ],

            regression:
                "Machine Chest Press hoặc Incline Push-up.",

            progression:
                "Double progression trong vùng 8–12 reps.",

            stopCondition:
                "Dừng khi đau vai/ngực bất thường hoặc mất kiểm soát tải."

        },


        shoulderPress: {

            name: "Dumbbell Shoulder Press",

            category: "Push",

            target:
                "Phát triển sức mạnh vai và tay sau.",

            sets: 2,

            reps: "8–12",

            rest: "75–90 giây",

            rpe: "RPE 6–7",

            rir:
                "Khoảng 3 lần lặp dự phòng.",

            technique: [
                "Giữ thân người ổn định.",
                "Không ngửa lưng quá mức.",
                "Đẩy tạ trong biên độ không gây đau.",
                "Hạ tạ có kiểm soát."
            ],

            mistakes: [
                "Ưỡn lưng quá nhiều.",
                "Dùng chân bật tạ.",
                "Ép vào biên độ gây đau."
            ],

            regression:
                "Landmine Press hoặc Machine Press.",

            progression:
                "Tăng reps trước rồi tăng tải nhỏ.",

            stopCondition:
                "Nếu đau vai tăng, dừng và chuyển sang biến thể không đau."

        },



        /* =========================
           PULL
        ========================== */

        dumbbellRow: {

            name: "Dumbbell Row",

            category: "Pull",

            target:
                "Phát triển cơ lưng, cơ quanh bả vai và sức mạnh kéo.",

            sets: 3,

            reps: "8–12 mỗi bên",

            rest: "75–90 giây",

            rpe: "RPE 6–8",

            rir:
                "Khoảng 2–4 lần lặp dự phòng.",

            technique: [
                "Giữ thân người ổn định.",
                "Kéo khuỷu tay về sau.",
                "Không xoay thân quá mức.",
                "Hạ tạ có kiểm soát."
            ],

            mistakes: [
                "Giật tạ bằng thân người.",
                "Nhún vai quá mức.",
                "Rút ngắn biên độ.",
                "Dùng tải quá nặng."
            ],

            regression:
                "Seated Cable Row hoặc Band Row.",

            progression:
                "Tăng reps trước rồi mới tăng tải.",

            stopCondition:
                "Dừng nếu đau lưng, vai hoặc xuất hiện tê lan."

        },


        latPulldown: {

            name: "Lat Pulldown",

            category: "Pull",

            target:
                "Phát triển cơ xô, lưng trên và khả năng kéo dọc.",

            sets: 3,

            reps: "8–12",

            rest: "75–90 giây",

            rpe: "RPE 6–8",

            rir:
                "Khoảng 2–4 lần lặp dự phòng.",

            technique: [
                "Giữ ngực ổn định.",
                "Kéo thanh về phần trên ngực.",
                "Không ngả người quá mức.",
                "Kiểm soát pha trở lại."
            ],

            mistakes: [
                "Kéo sau gáy.",
                "Dùng quán tính quá nhiều.",
                "Nhún vai.",
                "Thả thanh lên quá nhanh."
            ],

            regression:
                "Band Lat Pulldown.",

            progression:
                "Double progression trong vùng 8–12 reps.",

            stopCondition:
                "Dừng nếu đau vai hoặc cổ tăng."

        },



        /* =========================
           CORE
        ========================== */

        plank: {

            name: "Plank",

            category: "Core",

            target:
                "Phát triển khả năng ổn định thân người và kiểm soát cột sống.",

            sets: 3,

            reps: "20–45 giây",

            rest: "45–60 giây",

            rpe: "RPE 6–7",

            rir:
                "Dừng trước khi tư thế bắt đầu mất rõ rệt.",

            technique: [
                "Giữ đầu, thân và hông tương đối thẳng.",
                "Siết nhẹ bụng và mông.",
                "Thở bình thường.",
                "Không võng lưng."
            ],

            mistakes: [
                "Võng lưng.",
                "Nâng hông quá cao.",
                "Nín thở.",
                "Cố giữ dù tư thế đã hỏng."
            ],

            regression:
                "Plank với đầu gối chạm sàn.",

            progression:
                "Tăng thời gian từ từ hoặc chuyển sang biến thể khó hơn.",

            stopCondition:
                "Dừng nếu đau lưng hoặc vai tăng."

        },


        deadBug: {

            name: "Dead Bug",

            category: "Core",

            target:
                "Cải thiện kiểm soát thân người và phối hợp tay chân.",

            sets: 3,

            reps: "6–10 mỗi bên",

            rest: "45–60 giây",

            rpe: "RPE 5–7",

            rir:
                "Ưu tiên kỹ thuật hơn mệt cơ.",

            technique: [
                "Giữ lưng dưới ổn định.",
                "Di chuyển tay và chân từ từ.",
                "Thở đều.",
                "Chỉ mở rộng đến mức còn kiểm soát."
            ],

            mistakes: [
                "Lưng dưới nhấc khỏi vị trí kiểm soát.",
                "Di chuyển quá nhanh.",
                "Cố duỗi quá xa."
            ],

            regression:
                "Chỉ di chuyển chân hoặc chỉ di chuyển tay.",

            progression:
                "Tăng biên độ hoặc thêm kháng lực nhẹ.",

            stopCondition:
                "Dừng khi đau lưng tăng."

        },



        /* =========================
           CARDIO
        ========================== */

        briskWalk: {

            name: "Đi bộ nhanh",

            category: "Cardio",

            target:
                "Cải thiện nền tảng aerobic với mức tác động thấp.",

            sets: 1,

            reps: "20–40 phút",

            rest: "Không áp dụng",

            rpe: "RPE 3–5",

            rir:
                "Có thể nói chuyện nhưng nhịp thở tăng nhẹ.",

            technique: [
                "Duy trì tốc độ có thể kiểm soát.",
                "Giữ tư thế tự nhiên.",
                "Không cần cố đạt tốc độ tối đa."
            ],

            mistakes: [
                "Tăng tốc quá nhanh khi chưa quen.",
                "Bỏ qua đau bất thường."
            ],

            regression:
                "Đi bộ chậm hơn hoặc chia thành các đoạn 10–15 phút.",

            progression:
                "Tăng thời lượng 5–10 phút trước khi tăng tốc độ.",

            stopCondition:
                "Dừng nếu đau ngực, chóng mặt, khó thở bất thường hoặc đau tăng."

        }

    };



    /* =====================================================
       2. LẤY BÀI TẬP THEO THIẾT BỊ
    ====================================================== */

    function hasEquipment(
        profile,
        equipment
    ) {

        return profile.training
            .equipment
            .includes(equipment);

    }


    function chooseSquat(
        profile
    ) {

        if (
            hasEquipment(
                profile,
                "dumbbell"
            )
        ) {

            return exerciseLibrary
                .gobletSquat;
        }

        return exerciseLibrary
            .bodyweightSquat;

    }


    function choosePush(
        profile
    ) {

        if (
            hasEquipment(
                profile,
                "dumbbell"
            )
        ) {

            return exerciseLibrary
                .dumbbellPress;
        }

        return exerciseLibrary
            .pushUp;

    }


    function choosePull(
        profile
    ) {

        if (
            hasEquipment(
                profile,
                "machines"
            )
        ) {

            return exerciseLibrary
                .latPulldown;
        }


        if (
            hasEquipment(
                profile,
                "dumbbell"
            )
        ) {

            return exerciseLibrary
                .dumbbellRow;
        }


        return exerciseLibrary
            .dumbbellRow;

    }



    /* =====================================================
       3. TẠO BUỔI FULL BODY
    ====================================================== */

    function createFullBodySession(
        profile,
        name = "Full Body"
    ) {

        return {

            name: name,

            type:
                "Strength",

            duration:
                profile.training.duration,

            warmup: [
                "5–8 phút đi bộ nhẹ hoặc cardio dễ.",
                "Mobility nhẹ cho hông, vai và cột sống ngực.",
                "Thực hiện 1–3 hiệp khởi động nhẹ trước bài chính."
            ],

            exercises: [

                chooseSquat(
                    profile
                ),

                exerciseLibrary
                    .romanianDeadlift,

                choosePush(
                    profile
                ),

                choosePull(
                    profile
                ),

                exerciseLibrary
                    .plank

            ],

            cooldown: [
                "3–5 phút đi bộ nhẹ.",
                "Thở chậm để hạ nhịp.",
                "Stretching nhẹ nếu cảm thấy dễ chịu."
            ]

        };

    }



    /* =====================================================
       4. TẠO UPPER
    ====================================================== */

    function createUpperSession(
        profile
    ) {

        return {

            name:
                "Upper Body",

            type:
                "Strength",

            duration:
                profile.training.duration,

            warmup: [
                "5 phút cardio nhẹ.",
                "Xoay vai có kiểm soát.",
                "Band pull-apart hoặc movement prep nhẹ nếu có dây.",
                "1–2 hiệp khởi động cho bài đẩy và kéo."
            ],

            exercises: [

                choosePush(
                    profile
                ),

                choosePull(
                    profile
                ),

                exerciseLibrary
                    .shoulderPress,

                exerciseLibrary
                    .dumbbellRow,

                exerciseLibrary
                    .deadBug

            ],

            cooldown: [
                "Đi bộ hoặc thả lỏng 3–5 phút.",
                "Mobility vai nhẹ nếu cần."
            ]

        };

    }



    /* =====================================================
       5. TẠO LOWER
    ====================================================== */

    function createLowerSession(
        profile
    ) {

        return {

            name:
                "Lower Body",

            type:
                "Strength",

            duration:
                profile.training.duration,

            warmup: [
                "5–8 phút cardio nhẹ.",
                "Hip hinge không tải.",
                "Bodyweight squat nhẹ.",
                "Mobility cổ chân/hông trong biên độ thoải mái."
            ],

            exercises: [

                chooseSquat(
                    profile
                ),

                exerciseLibrary
                    .romanianDeadlift,

                exerciseLibrary
                    .reverseLunge,

                exerciseLibrary
                    .hipThrust,

                exerciseLibrary
                    .plank

            ],

            cooldown: [
                "Đi bộ nhẹ.",
                "Stretching nhẹ vùng chân nếu cảm thấy phù hợp."
            ]

        };

    }



    /* =====================================================
       6. CARDIO SESSION
    ====================================================== */

    function createCardioSession(
        profile
    ) {

        const beginner =
            profile.training.experience
            === "beginner";


        return {

            name:
                "Cardio nền tảng",

            type:
                "Cardio",

            duration:
                beginner
                    ? 25
                    : 35,

            intensity:
                beginner
                    ? "RPE 3–4"
                    : "RPE 4–5",

            talkTest:
                "Bạn vẫn có thể nói được, nhưng hơi thở tăng so với khi nghỉ.",

            exercises: [
                exerciseLibrary
                    .briskWalk,

                exerciseLibrary
                    .deadBug
            ],

            progression:
                "Ưu tiên tăng thời lượng từng bước nhỏ trước khi tăng cường độ."

        };

    }



    /* =====================================================
       7. REST DAY
    ====================================================== */

    function createRestDay() {

        return {

            name:
                "Phục hồi",

            type:
                "Recovery",

            recommendations: [
                "Đi bộ nhẹ nếu cảm thấy thoải mái.",
                "Không cần cố đạt cường độ cao.",
                "Ưu tiên giấc ngủ và dinh dưỡng.",
                "Có thể thực hiện mobility nhẹ 10–15 phút."
            ]

        };

    }



    /* =====================================================
       8. CHIẾN LƯỢC TẬP
    ====================================================== */

    function createStrategy(
        profile
    ) {

        const days =
            profile.training.days;


        const experience =
            profile.training
                .experience;


        let split;


        if (
            days <= 3
        ) {

            split =
                "Full Body";

        }


        else if (
            days === 4
        ) {

            split =
                "Upper / Lower";

        }


        else {

            split =
                "Upper / Lower kết hợp Full Body và cardio";

        }


        let reason =
            "";


        if (
            experience === "beginner"
        ) {

            reason =
                "Bạn đang ở mức người mới hoặc mới quay lại tập luyện. Vì vậy chương trình ưu tiên tần suất tiếp xúc với các mẫu vận động cơ bản nhưng giữ tổng khối lượng ở mức có thể phục hồi.";

        }


        else {

            reason =
                `Bạn có thể bố trí ${days} buổi mỗi tuần. Cách chia ${split} giúp phân bổ khối lượng tập hợp lý và tạo khoảng phục hồi giữa các nhóm cơ.`;

        }


        return {

            weeklySessions:
                days,

            split:
                split,

            reason:
                reason,

            progression:
                "Sử dụng double progression. Trước tiên tăng số lần lặp trong vùng quy định. Khi đạt đầu trên của rep range ở tất cả hiệp, kỹ thuật tốt và RPE vẫn phù hợp, mới tăng tải ở mức nhỏ nhất khả dụng.",

            recoveryRule:
                "Không tăng đồng thời tải, reps, sets và cardio trong cùng một lần điều chỉnh.",

            beginnerIntensity:
                "Phần lớn hiệp tập giữ khoảng RPE 6–8 thay vì liên tục tập đến thất bại."

        };

    }



    /* =====================================================
       9. SINH LỊCH 7 NGÀY
    ====================================================== */

    function createWeeklySchedule(
        profile
    ) {

        const days =
            profile.training.days;


        const goal =
            profile.goal.primary;


        let trainingSessions = [];


        if (
            days === 2
        ) {

            trainingSessions = [

                createFullBodySession(
                    profile,
                    "Full Body A"
                ),

                createFullBodySession(
                    profile,
                    "Full Body B"
                )

            ];

        }


        else if (
            days === 3
        ) {

            trainingSessions = [

                createFullBodySession(
                    profile,
                    "Full Body A"
                ),

                goal === "endurance"
                    ? createCardioSession(
                        profile
                    )
                    : createFullBodySession(
                        profile,
                        "Full Body B"
                    ),

                createFullBodySession(
                    profile,
                    "Full Body C"
                )

            ];

        }


        else if (
            days === 4
        ) {

            trainingSessions = [

                createUpperSession(
                    profile
                ),

                createLowerSession(
                    profile
                ),

                createUpperSession(
                    profile
                ),

                createLowerSession(
                    profile
                )

            ];

        }


        else {

            trainingSessions = [

                createUpperSession(
                    profile
                ),

                createLowerSession(
                    profile
                ),

                createFullBodySession(
                    profile
                ),

                createUpperSession(
                    profile
                ),

                createLowerSession(
                    profile
                )

            ];


            if (
                days >= 6
            ) {

                trainingSessions.push(
                    createCardioSession(
                        profile
                    )
                );

            }

        }



        const week =
            Array.from(
                {
                    length: 7
                },
                () =>
                    createRestDay()
            );


        const preferredSlots = {

            2: [
                1,
                4
            ],

            3: [
                0,
                2,
                4
            ],

            4: [
                0,
                1,
                3,
                4
            ],

            5: [
                0,
                1,
                2,
                4,
                5
            ],

            6: [
                0,
                1,
                2,
                3,
                4,
                5
            ]

        };


        const slots =
            preferredSlots[days]
            || preferredSlots[3];


        trainingSessions
            .forEach(
                (
                    session,
                    index
                ) => {

                    if (
                        slots[index]
                        !== undefined
                    ) {

                        week[
                            slots[index]
                        ] =
                            session;

                    }

                }
            );


        return week;

    }



    /* =====================================================
       10. ĐIỀU CHỈNH THEO PHỤC HỒI
    ====================================================== */

    function recoveryAdjustment(
        profile
    ) {

        const recovery =
            profile.recovery;


        if (
            recovery.sleepHours < 6 ||
            recovery.fatigue >= 8 ||
            recovery.energy <= 3
        ) {

            return {

                level:
                    "reduce",

                message:
                    "Dữ liệu phục hồi hiện cho thấy khả năng chịu tải có thể thấp hơn bình thường. Trong tuần đầu nên giảm khoảng 10–20% tổng volume hoặc giữ tải nhẹ hơn và ưu tiên kỹ thuật."

            };

        }


        if (
            recovery.sleepHours < 7 ||
            recovery.stress >= 7 ||
            recovery.fatigue >= 6
        ) {

            return {

                level:
                    "caution",

                message:
                    "Khả năng phục hồi ở mức cần theo dõi. Không nên tăng đồng thời nhiều biến tập luyện trong tuần này."

            };

        }


        return {

            level:
                "normal",

            message:
                "Dữ liệu phục hồi hiện không cho thấy lý do rõ ràng cần giảm volume ngay từ đầu."

        };

    }



    /* =====================================================
       11. CHẠY WORKOUT ENGINE
    ====================================================== */

    function run(
        profile,
        healthResult
    ) {

        if (
            !profile
        ) {

            return {

                success:
                    false,

                error:
                    "Không có hồ sơ người dùng."

            };

        }


        if (
            healthResult &&
            healthResult.safety &&
            healthResult.safety
                .allowFullAutomation
                === false
        ) {

            return {

                success:
                    false,

                blocked:
                    true,

                reason:
                    healthResult.safety
                        .message,

                schedule:
                    []

            };

        }


        const strategy =
            createStrategy(
                profile
            );


        const weeklySchedule =
            createWeeklySchedule(
                profile
            );


        const recovery =
            recoveryAdjustment(
                profile
            );


        return {

            success:
                true,

            engine:
                "SportHub Workout Engine v1.0",

            strategy:
                strategy,

            recoveryAdjustment:
                recovery,

            schedule:
                weeklySchedule,

            rules: {

                rpeExplanation: {

                    6:
                        "Còn khoảng 4 lần lặp có thể thực hiện.",

                    7:
                        "Còn khoảng 3 lần lặp.",

                    8:
                        "Còn khoảng 2 lần lặp."

                },

                progression:
                    "Double progression",

                failureTraining:
                    false,

                painRule:
                    "Đau sắc, đau tăng nhanh, tê lan hoặc triệu chứng bất thường là tín hiệu dừng và đánh giá lại."

            }

        };

    }



    /* =====================================================
       12. PUBLIC API
    ====================================================== */

    return {

        run:
            run,

        library:
            exerciseLibrary,

        createStrategy:
            createStrategy,

        createWeeklySchedule:
            createWeeklySchedule,

        recoveryAdjustment:
            recoveryAdjustment

    };


})();