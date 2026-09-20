/* =========================================================
   SPORTHUB FITNESS CHECK CONTROLLER
   Version 3.0
========================================================= */

let currentStep = 1;

const totalSteps = 7;


/* =========================================================
   1. HELPER
========================================================= */

function el(id) {

    return document.getElementById(id);

}


function showMessage(message) {

    if (
        typeof toast === "function"
    ) {

        toast(message);

        return;

    }

    alert(message);

}


function getRadioValue(name) {

    const checked =
        document.querySelector(
            `input[name="${name}"]:checked`
        );

    return checked
        ? checked.value
        : "";

}


function getEquipment() {

    return Array.from(
        document.querySelectorAll(
            ".equipment-item:checked"
        )
    ).map(
        item => item.value
    );

}


function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}



/* =========================================================
   2. HIỂN THỊ BƯỚC
========================================================= */

function showStep() {

    document
        .querySelectorAll(
            ".fitness-step"
        )
        .forEach(
            item => {

                item
                    .classList
                    .remove(
                        "active"
                    );

            }
        );


    const activeStep =
        document.querySelector(
            `[data-step="${currentStep}"]`
        );


    if (activeStep) {

        activeStep
            .classList
            .add(
                "active"
            );

    }


    const progress =
        el(
            "progress"
        );


    if (progress) {

        progress.style.width =
            (
                currentStep /
                totalSteps *
                100
            )
            +
            "%";

    }


    const progressText =
        el(
            "progressText"
        );


    if (progressText) {

        progressText.textContent =
            `Bước ${currentStep}/${totalSteps}`;

    }


    const backButton =
        el(
            "back"
        );


    if (backButton) {

        backButton.style.visibility =
            currentStep === 1
                ? "hidden"
                : "visible";

    }


    const nextButton =
        el(
            "next"
        );


    if (nextButton) {

        nextButton.textContent =
            currentStep === totalSteps
                ? "PHÂN TÍCH & TẠO BÁO CÁO"
                : "Tiếp tục →";

    }

}



/* =========================================================
   3. VALIDATION
========================================================= */

function validateCurrentStep() {


    /* =========================
       BƯỚC 1
    ========================== */

    if (
        currentStep === 1
    ) {

        const age =
            Number(
                el("age").value
            );


        const sex =
            el("sex").value;


        const height =
            Number(
                el("height").value
            );


        const weight =
            Number(
                el("weight").value
            );


        if (!age) {

            showMessage(
                "Hãy nhập tuổi."
            );

            return false;

        }


        if (
            age < 18 ||
            age > 64
        ) {

            showMessage(
                "Phiên bản hiện tại áp dụng cho người từ 18 đến 64 tuổi."
            );

            return false;

        }


        if (!sex) {

            showMessage(
                "Hãy chọn giới tính sinh học."
            );

            return false;

        }


        if (
            !height ||
            height < 120 ||
            height > 230
        ) {

            showMessage(
                "Hãy nhập chiều cao hợp lệ."
            );

            return false;

        }


        if (
            !weight ||
            weight < 30 ||
            weight > 250
        ) {

            showMessage(
                "Hãy nhập cân nặng hợp lệ."
            );

            return false;

        }

    }



    /* =========================
       BƯỚC 3
    ========================== */

    if (
        currentStep === 3
    ) {

        if (
            !el(
                "jobActivity"
            ).value
        ) {

            showMessage(
                "Hãy chọn tính chất công việc."
            );

            return false;

        }


        if (
            el(
                "steps"
            ).value === ""
        ) {

            showMessage(
                "Hãy nhập số bước trung bình mỗi ngày."
            );

            return false;

        }


        if (
            el(
                "sittingHours"
            ).value === ""
        ) {

            showMessage(
                "Hãy nhập thời gian ngồi trung bình mỗi ngày."
            );

            return false;

        }

    }



    /* =========================
       BƯỚC 4
    ========================== */

    if (
        currentStep === 4
    ) {

        if (
            !getRadioValue(
                "goal"
            )
        ) {

            showMessage(
                "Hãy chọn mục tiêu chính."
            );

            return false;

        }

    }



    /* =========================
       BƯỚC 5
    ========================== */

    if (
        currentStep === 5
    ) {

        if (
            !el(
                "experience"
            ).value
        ) {

            showMessage(
                "Hãy chọn kinh nghiệm tập luyện."
            );

            return false;

        }


        if (
            getEquipment()
                .length === 0
        ) {

            showMessage(
                "Hãy chọn ít nhất một loại dụng cụ."
            );

            return false;

        }

    }



    /* =========================
       BƯỚC 7
    ========================== */

    if (
        currentStep === 7
    ) {

        const sleepHours =
            Number(
                el(
                    "sleepHours"
                ).value
            );


        if (
            !sleepHours ||
            sleepHours < 3 ||
            sleepHours > 12
        ) {

            showMessage(
                "Hãy nhập số giờ ngủ hợp lệ."
            );

            return false;

        }


        if (
            !el(
                "energy"
            ).value
        ) {

            showMessage(
                "Hãy chọn mức năng lượng."
            );

            return false;

        }


        if (
            !el(
                "stress"
            ).value
        ) {

            showMessage(
                "Hãy chọn mức stress."
            );

            return false;

        }


        if (
            !el(
                "fatigue"
            ).value
        ) {

            showMessage(
                "Hãy chọn mức mệt hiện tại."
            );

            return false;

        }

    }


    return true;

}



/* =========================================================
   4. NEXT STEP
========================================================= */

function nextStep() {

    if (
        !validateCurrentStep()
    ) {

        return;

    }


    if (
        currentStep <
        totalSteps
    ) {

        currentStep++;


        showStep();


        window.scrollTo({

            top:
                150,

            behavior:
                "smooth"

        });


        return;

    }


    runFitnessAnalysis();

}



/* =========================================================
   5. PREVIOUS STEP
========================================================= */

function prevStep() {

    if (
        currentStep > 1
    ) {

        currentStep--;


        showStep();


        window.scrollTo({

            top:
                150,

            behavior:
                "smooth"

        });

    }

}



/* =========================================================
   6. CHẤN THƯƠNG
========================================================= */

document
    .querySelectorAll(
        'input[name="injury"]'
    )
    .forEach(
        input => {

            input
                .addEventListener(
                    "change",
                    function () {

                        const injury =
                            getRadioValue(
                                "injury"
                            );


                        const wrap =
                            el(
                                "injuryAreaWrap"
                            );


                        if (!wrap) {

                            return;

                        }


                        wrap.style.display =
                            injury === "yes"
                                ? "block"
                                : "none";

                    }
                );

        }
    );



/* =========================================================
   7. THU THẬP PROFILE
========================================================= */

function collectFitnessProfile() {

    return {


        /* =========================
           CƠ BẢN
        ========================== */

        age:
            Number(
                el(
                    "age"
                ).value
            ),


        sex:
            el(
                "sex"
            ).value,


        height:
            Number(
                el(
                    "height"
                ).value
            ),


        weight:
            Number(
                el(
                    "weight"
                ).value
            ),


        waist:
            el(
                "waist"
            ).value

                ? Number(
                    el(
                        "waist"
                    ).value
                )

                : null,



        /* =========================
           SAFETY
        ========================== */

        safety: {

            chest:
                getRadioValue(
                    "chest"
                ),


            faint:
                getRadioValue(
                    "faint"
                ),


            breath:
                getRadioValue(
                    "breath"
                ),


            injury:
                getRadioValue(
                    "injury"
                ),


            injuryArea:
                el(
                    "injuryArea"
                ).value,


            medical:
                getRadioValue(
                    "medical"
                ),


            surgery:
                getRadioValue(
                    "surgery"
                ),


            pregnancy:
                getRadioValue(
                    "pregnancy"
                ),


            medicalNote:
                el(
                    "medicalNote"
                )
                .value
                .trim()

        },



        /* =========================
           ACTIVITY
        ========================== */

        activity: {

            jobActivity:
                el(
                    "jobActivity"
                ).value,


            steps:
                Number(
                    el(
                        "steps"
                    ).value
                ),


            sittingHours:
                Number(
                    el(
                        "sittingHours"
                    ).value
                ),


            currentTrainingDays:
                Number(
                    el(
                        "currentTrainingDays"
                    ).value
                ),


            dailyActivity:
                el(
                    "dailyActivity"
                ).value,


            activityNote:
                el(
                    "activityNote"
                )
                .value
                .trim()

        },



        /* =========================
           GOAL
        ========================== */

        goal: {

            primary:
                getRadioValue(
                    "goal"
                ),


            note:
                el(
                    "goalNote"
                )
                .value
                .trim()

        },



        /* =========================
           TRAINING
        ========================== */

        training: {

            experience:
                el(
                    "experience"
                ).value,


            days:
                Number(
                    el(
                        "days"
                    ).value
                ),


            duration:
                Number(
                    el(
                        "duration"
                    ).value
                ),


            location:
                el(
                    "locationSel"
                ).value,


            trainingTime:
                el(
                    "trainingTime"
                ).value,


            equipment:
                getEquipment(),


            trainingLimit:
                el(
                    "trainingLimit"
                )
                .value
                .trim()

        },



        /* =========================
           NUTRITION
        ========================== */

        nutrition: {

            meals:
                Number(
                    el(
                        "meals"
                    ).value
                ),


            dietType:
                el(
                    "dietType"
                ).value,


            allergies:
                el(
                    "allergies"
                )
                .value
                .trim(),


            foodLikes:
                el(
                    "foodLikes"
                )
                .value
                .trim(),


            foodDislikes:
                el(
                    "foodDislikes"
                )
                .value
                .trim(),


            foodRestriction:
                el(
                    "foodRestriction"
                )
                .value
                .trim(),


            budget:
                el(
                    "budget"
                ).value,


            cooking:
                el(
                    "cooking"
                ).value,


            eatingOut:
                el(
                    "eatingOut"
                ).value,


            prepTime:
                el(
                    "prepTime"
                ).value

        },



        /* =========================
           RECOVERY
        ========================== */

        recovery: {

            sleepHours:
                Number(
                    el(
                        "sleepHours"
                    ).value
                ),


            energy:
                Number(
                    el(
                        "energy"
                    ).value
                ),


            bedTime:
                el(
                    "bedTime"
                ).value,


            wakeTime:
                el(
                    "wakeTime"
                ).value,


            stress:
                Number(
                    el(
                        "stress"
                    ).value
                ),


            fatigue:
                Number(
                    el(
                        "fatigue"
                    ).value
                ),


            caffeine:
                el(
                    "caffeine"
                ).value,


            recoveryNote:
                el(
                    "recoveryNote"
                )
                .value
                .trim()

        },



        createdAt:
            new Date()
                .toISOString(),


        version:
            "SportHub Fitness Engine v1.0"

    };

}



/* =========================================================
   8. TÊN MỤC TIÊU
========================================================= */

function getGoalName(goal) {

    const names = {

        fatloss:
            "Giảm mỡ",

        muscle:
            "Tăng cơ",

        strength:
            "Tăng sức mạnh",

        endurance:
            "Tăng sức bền",

        fitness:
            "Cải thiện thể lực",

        mobility:
            "Tăng linh hoạt",

        maintenance:
            "Duy trì thể trạng"

    };


    return names[goal]
        ||
        "Chưa xác định";

}



/* =========================================================
   9. CHẠY TOÀN BỘ ENGINE
========================================================= */

function runFitnessAnalysis() {

    const profile =
        collectFitnessProfile();


    localStorage.setItem(

        "sporthub_fitness_profile",

        JSON.stringify(
            profile
        )

    );


    /* =========================
       HEALTH ENGINE
    ========================== */

    if (
        !window
            .SportHubHealthEngine
    ) {

        showMessage(
            "Không tìm thấy health-engine.js."
        );

        return;

    }


    const healthResult =
        window
            .SportHubHealthEngine
            .run(
                profile
            );


    localStorage.setItem(

        "sporthub_fitness_analysis",

        JSON.stringify(
            healthResult
        )

    );


    /* =========================
       WORKOUT ENGINE
    ========================== */

    let workoutResult =
        null;


    if (
        window
            .SportHubWorkoutEngine
    ) {

        workoutResult =
            window
                .SportHubWorkoutEngine
                .run(
                    profile,
                    healthResult
                );


        localStorage.setItem(

            "sporthub_workout_plan",

            JSON.stringify(
                workoutResult
            )

        );

    }


    renderFitnessReport(

        profile,

        healthResult,

        workoutResult

    );

}



/* =========================================================
   10. SAFETY HTML
========================================================= */

function buildSafetyHTML(
    safety
) {

    if (!safety) {

        return "";

    }


    if (
        safety.level === "stop"
    ) {

        return `

            <div class="safety-box stop">

                <h3>
                    Cần đánh giá chuyên môn trước khi tiếp tục
                </h3>

                <p>
                    Hệ thống ghi nhận một hoặc nhiều yếu tố
                    cần thận trọng:
                </p>


                <ul
                    style="
                        margin:12px 0 0 20px;
                    "
                >

                    ${
                        safety
                            .reasons
                            .map(
                                item => `

                                    <li>
                                        ${
                                            escapeHTML(
                                                item
                                            )
                                        }
                                    </li>

                                `
                            )
                            .join("")
                    }

                </ul>


                <p
                    style="
                        margin-top:14px;
                    "
                >

                    ${
                        escapeHTML(
                            safety.message
                        )
                    }

                </p>

            </div>

        `;

    }


    if (
        safety.level === "caution"
    ) {

        return `

            <div class="safety-box caution">

                <h3>
                    Có yếu tố cần điều chỉnh
                </h3>

                <p>
                    ${
                        escapeHTML(
                            safety.message
                        )
                    }
                </p>

            </div>

        `;

    }


    return `

        <div class="safety-box safe">

            <h3>
                Safety Check ban đầu
            </h3>

            <p>
                ${
                    escapeHTML(
                        safety.message
                    )
                }
            </p>

        </div>

    `;

}



/* =========================================================
   11. LIST HTML
========================================================= */

function buildListHTML(items) {

    if (
        !Array.isArray(items) ||
        items.length === 0
    ) {

        return "";

    }


    return `

        <ul
            style="
                padding-left:20px;
                margin-top:8px;
            "
        >

            ${
                items
                    .map(
                        item => `

                            <li
                                style="
                                    margin-bottom:6px;
                                "
                            >
                                ${
                                    escapeHTML(
                                        item
                                    )
                                }
                            </li>

                        `
                    )
                    .join("")
            }

        </ul>

    `;

}



/* =========================================================
   12. CHI TIẾT BÀI TẬP
========================================================= */

function buildExerciseHTML(
    exercise
) {

    if (!exercise) {

        return "";

    }


    return `

        <div
            style="
                background:#f7f9fa;
                border:1px solid #dfe5e8;
                border-radius:12px;
                padding:18px;
                margin-top:14px;
            "
        >

            <span class="eyebrow">
                ${
                    escapeHTML(
                        exercise.category
                    )
                }
            </span>


            <h3
                style="
                    margin:6px 0 12px;
                "
            >
                ${
                    escapeHTML(
                        exercise.name
                    )
                }
            </h3>


            <p>
                <strong>Mục tiêu:</strong>
                ${
                    escapeHTML(
                        exercise.target
                    )
                }
            </p>


            <div
                style="
                    display:grid;
                    grid-template-columns:
                    repeat(auto-fit,minmax(140px,1fr));
                    gap:10px;
                    margin:15px 0;
                "
            >

                <div class="policy">

                    <b>
                        Sets
                    </b>

                    <div>
                        ${
                            escapeHTML(
                                exercise.sets
                            )
                        }
                    </div>

                </div>


                <div class="policy">

                    <b>
                        Reps / thời gian
                    </b>

                    <div>
                        ${
                            escapeHTML(
                                exercise.reps
                            )
                        }
                    </div>

                </div>


                <div class="policy">

                    <b>
                        Nghỉ
                    </b>

                    <div>
                        ${
                            escapeHTML(
                                exercise.rest
                            )
                        }
                    </div>

                </div>


                <div class="policy">

                    <b>
                        Cường độ
                    </b>

                    <div>
                        ${
                            escapeHTML(
                                exercise.rpe
                            )
                        }
                    </div>

                </div>

            </div>


            <p>
                <strong>RIR / mức dự phòng:</strong>
                ${
                    escapeHTML(
                        exercise.rir
                    )
                }
            </p>


            <details
                style="
                    margin-top:14px;
                "
            >

                <summary
                    style="
                        cursor:pointer;
                        font-weight:800;
                    "
                >
                    Hướng dẫn kỹ thuật
                </summary>

                ${
                    buildListHTML(
                        exercise.technique
                    )
                }

            </details>


            <details
                style="
                    margin-top:12px;
                "
            >

                <summary
                    style="
                        cursor:pointer;
                        font-weight:800;
                    "
                >
                    Lỗi thường gặp
                </summary>

                ${
                    buildListHTML(
                        exercise.mistakes
                    )
                }

            </details>


            <p
                style="
                    margin-top:14px;
                "
            >

                <strong>
                    Nếu quá khó:
                </strong>

                ${
                    escapeHTML(
                        exercise.regression
                    )
                }

            </p>


            <p
                style="
                    margin-top:10px;
                "
            >

                <strong>
                    Cách tăng tiến:
                </strong>

                ${
                    escapeHTML(
                        exercise.progression
                    )
                }

            </p>


            <p
                style="
                    margin-top:10px;
                "
            >

                <strong>
                    Điều kiện dừng:
                </strong>

                ${
                    escapeHTML(
                        exercise.stopCondition
                    )
                }

            </p>

        </div>

    `;

}



/* =========================================================
   13. RENDER TỪNG NGÀY
========================================================= */

function buildWorkoutDayHTML(
    session,
    index
) {

    const dayNames = [

        "Thứ Hai",

        "Thứ Ba",

        "Thứ Tư",

        "Thứ Năm",

        "Thứ Sáu",

        "Thứ Bảy",

        "Chủ Nhật"

    ];


    if (!session) {

        return "";

    }


    /* =========================
       REST DAY
    ========================== */

    if (
        session.type ===
        "Recovery"
    ) {

        return `

            <div class="workout-day">

                <span class="eyebrow">
                    ${
                        dayNames[index]
                    }
                </span>

                <h3>
                    Phục hồi
                </h3>

                ${
                    buildListHTML(
                        session.recommendations
                    )
                }

            </div>

        `;

    }


    /* =========================
       TRAINING DAY
    ========================== */

    return `

        <div class="workout-day">

            <span class="eyebrow">
                ${
                    dayNames[index]
                }
            </span>


            <h3>
                ${
                    escapeHTML(
                        session.name
                    )
                }
            </h3>


            <p>
                <strong>Loại:</strong>
                ${
                    escapeHTML(
                        session.type
                    )
                }
            </p>


            ${
                session.duration

                    ? `

                        <p>
                            <strong>Thời lượng:</strong>
                            ${session.duration} phút
                        </p>

                    `

                    : ""
            }


            ${
                session.intensity

                    ? `

                        <p>
                            <strong>Cường độ:</strong>
                            ${
                                escapeHTML(
                                    session.intensity
                                )
                            }
                        </p>

                    `

                    : ""
            }


            ${
                session.talkTest

                    ? `

                        <p>
                            <strong>Talk Test:</strong>
                            ${
                                escapeHTML(
                                    session.talkTest
                                )
                            }
                        </p>

                    `

                    : ""
            }


            ${
                session.warmup

                    ? `

                        <details
                            style="
                                margin-top:15px;
                            "
                        >

                            <summary
                                style="
                                    cursor:pointer;
                                    font-weight:800;
                                "
                            >
                                Khởi động
                            </summary>

                            ${
                                buildListHTML(
                                    session.warmup
                                )
                            }

                        </details>

                    `

                    : ""
            }


            ${
                Array.isArray(
                    session.exercises
                )

                    ? session
                        .exercises
                        .map(
                            exercise =>
                                buildExerciseHTML(
                                    exercise
                                )
                        )
                        .join("")

                    : ""
            }


            ${
                session.cooldown

                    ? `

                        <details
                            style="
                                margin-top:15px;
                            "
                        >

                            <summary
                                style="
                                    cursor:pointer;
                                    font-weight:800;
                                "
                            >
                                Cooldown
                            </summary>

                            ${
                                buildListHTML(
                                    session.cooldown
                                )
                            }

                        </details>

                    `

                    : ""
            }


            ${
                session.progression

                    ? `

                        <p
                            style="
                                margin-top:15px;
                            "
                        >

                            <strong>
                                Progression:
                            </strong>

                            ${
                                escapeHTML(
                                    session.progression
                                )
                            }

                        </p>

                    `

                    : ""
            }

        </div>

    `;

}



/* =========================================================
   14. WORKOUT REPORT
========================================================= */

function buildWorkoutReportHTML(
    workout
) {

    if (!workout) {

        return `

            <div class="safety-box caution">

                <h3>
                    Workout Engine chưa được tải
                </h3>

                <p>
                    Hãy kiểm tra file workout-engine.js.
                </p>

            </div>

        `;

    }


    if (
        workout.blocked
    ) {

        return `

            <div class="safety-box stop">

                <h3>
                    Chưa tạo lịch tập tự động
                </h3>

                <p>
                    ${
                        escapeHTML(
                            workout.reason
                        )
                    }
                </p>

            </div>

        `;

    }


    if (
        workout.success !== true
    ) {

        return `

            <div class="safety-box caution">

                <h3>
                    Chưa thể tạo kế hoạch tập
                </h3>

                <p>
                    ${
                        escapeHTML(
                            workout.error
                            ||
                            "Không đủ dữ liệu."
                        )
                    }
                </p>

            </div>

        `;

    }


    return `

        <!-- =============================================
             CHIẾN LƯỢC TẬP
        ============================================== -->

        <div
            style="
                margin-top:55px;
            "
        >

            <span class="eyebrow">
                CHIẾN LƯỢC TẬP LUYỆN
            </span>

            <h2
                style="
                    margin:8px 0 20px;
                "
            >
                Vì sao chọn chương trình này?
            </h2>

        </div>


        <div class="result-grid">

            <div class="result-stat">

                <span>
                    Số buổi
                </span>

                <strong>
                    ${
                        workout
                            .strategy
                            .weeklySessions
                    } buổi
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Kiểu chương trình
                </span>

                <strong>
                    ${
                        escapeHTML(
                            workout
                                .strategy
                                .split
                        )
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Progression
                </span>

                <strong>
                    Double
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    RPE chính
                </span>

                <strong>
                    6–8
                </strong>

            </div>

        </div>


        <div class="safety-box">

            <h3>
                Logic lựa chọn
            </h3>

            <p>
                ${
                    escapeHTML(
                        workout
                            .strategy
                            .reason
                    )
                }
            </p>

        </div>


        <div class="safety-box">

            <h3>
                Cách tăng tiến
            </h3>

            <p>
                ${
                    escapeHTML(
                        workout
                            .strategy
                            .progression
                    )
                }
            </p>

            <p
                style="
                    margin-top:10px;
                "
            >
                ${
                    escapeHTML(
                        workout
                            .strategy
                            .recoveryRule
                    )
                }
            </p>

        </div>


        <div
            class="safety-box ${
                workout
                    .recoveryAdjustment
                    .level === "reduce"

                    ? "caution"

                    : ""
            }"
        >

            <h3>
                Điều chỉnh theo phục hồi
            </h3>

            <p>
                ${
                    escapeHTML(
                        workout
                            .recoveryAdjustment
                            .message
                    )
                }
            </p>

        </div>


        <!-- =============================================
             LỊCH 7 NGÀY
        ============================================== -->

        <div
            style="
                margin-top:55px;
            "
        >

            <span class="eyebrow">
                KẾ HOẠCH TẬP
            </span>

            <h2
                style="
                    margin:8px 0 8px;
                "
            >
                Lịch 7 ngày
            </h2>

            <p
                style="
                    color:#a5b1b6;
                    margin-bottom:20px;
                "
            >
                Nhấn vào từng mục kỹ thuật để xem
                hướng dẫn chi tiết.
            </p>

        </div>


        <div class="workout-grid">

            ${
                workout
                    .schedule
                    .map(
                        (
                            session,
                            index
                        ) =>
                            buildWorkoutDayHTML(
                                session,
                                index
                            )
                    )
                    .join("")
            }

        </div>


        <!-- =============================================
             RPE / RIR
        ============================================== -->

        <div
            class="safety-box"
            style="
                margin-top:35px;
            "
        >

            <h3>
                Cách hiểu RPE / RIR
            </h3>

            <p>
                <strong>RPE 6:</strong>
                còn khoảng 4 lần lặp có thể thực hiện.
            </p>

            <p>
                <strong>RPE 7:</strong>
                còn khoảng 3 lần lặp.
            </p>

            <p>
                <strong>RPE 8:</strong>
                còn khoảng 2 lần lặp.
            </p>

            <p
                style="
                    margin-top:10px;
                "
            >
                Người mới không cần liên tục tập
                đến thất bại. Ưu tiên kỹ thuật,
                khả năng phục hồi và tiến bộ bền vững.
            </p>

        </div>

    `;

}



/* =========================================================
   15. RENDER REPORT
========================================================= */

function renderFitnessReport(
    profile,
    healthResult,
    workoutResult
) {

    const resultBox =
        el(
            "fitnessResultContent"
        );


    const resultSection =
        el(
            "fitnessResult"
        );


    if (
        !resultBox ||
        !resultSection
    ) {

        return;

    }


    if (
        !healthResult ||
        healthResult.success !== true
    ) {

        resultBox.innerHTML = `

            <div class="safety-box stop">

                <h3>
                    Không thể tạo báo cáo
                </h3>

                <p>
                    ${
                        escapeHTML(
                            healthResult
                            &&
                            healthResult.error

                                ? healthResult.error

                                : "Không đủ dữ liệu để phân tích."
                        )
                    }
                </p>

            </div>

        `;


        resultSection
            .classList
            .add(
                "active"
            );


        return;

    }



    const safety =
        healthResult.safety;


    const bmi =
        healthResult.body
            ? healthResult.body.bmi
            : null;


    const rmr =
        healthResult.body
            ? healthResult.body.rmr
            : null;


    const activityFactor =
        healthResult.energy
            ? healthResult.energy
                .activityFactor
            : null;


    const tdee =
        healthResult.energy
            ? healthResult.energy.tdee
            : null;


    const calorie =
        healthResult.energy
            ? healthResult.energy
                .calorieTarget
            : null;


    const protein =
        healthResult.nutrition
            ? healthResult.nutrition
                .protein
            : null;


    const fat =
        healthResult.nutrition
            ? healthResult.nutrition
                .fat
            : null;


    const carbs =
        healthResult.nutrition
            ? healthResult.nutrition
                .carbs
            : null;


    const recovery =
        healthResult.recovery;



    resultBox.innerHTML = `


        <!-- =============================================
             TỔNG QUAN
        ============================================== -->

        <div class="section-heading">

            <div>

                <span class="eyebrow">
                    PERSONAL HEALTH & FITNESS REPORT
                </span>

                <h2>
                    Tổng quan cá nhân
                </h2>

                <p>
                    Báo cáo được xây dựng từ dữ liệu
                    bạn cung cấp trong Fitness Check.
                </p>

            </div>

        </div>



        <div class="result-grid">


            <div class="result-stat">

                <span>
                    Tuổi
                </span>

                <strong>
                    ${profile.age}
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Chiều cao
                </span>

                <strong>
                    ${profile.height} cm
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Cân nặng
                </span>

                <strong>
                    ${profile.weight} kg
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Mục tiêu
                </span>

                <strong>
                    ${
                        escapeHTML(
                            getGoalName(
                                profile
                                    .goal
                                    .primary
                            )
                        )
                    }
                </strong>

            </div>

        </div>



        ${
            buildSafetyHTML(
                safety
            )
        }



        <!-- =============================================
             PHÂN TÍCH THỂ TRẠNG
        ============================================== -->

        <div
            style="
                margin-top:45px;
            "
        >

            <span class="eyebrow">
                PHÂN TÍCH THỂ TRẠNG
            </span>

            <h2
                style="
                    margin:8px 0 20px;
                "
            >
                Các chỉ số nền tảng
            </h2>

        </div>



        <div class="result-grid">


            <div class="result-stat">

                <span>
                    BMI
                </span>

                <strong>
                    ${
                        bmi
                            ? bmi.value
                            : "—"
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    RMR ước tính
                </span>

                <strong>
                    ${
                        rmr
                            ? `${rmr.value} kcal`
                            : "—"
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Hệ số vận động
                </span>

                <strong>
                    ${
                        activityFactor
                            ? activityFactor.value
                            : "—"
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    TDEE ước tính
                </span>

                <strong>
                    ${
                        tdee

                            ? `${tdee.min}–${tdee.max} kcal`

                            : "—"
                    }
                </strong>

            </div>

        </div>



        <div class="safety-box">

            <h3>
                Ý nghĩa của BMI
            </h3>

            <p>
                ${
                    bmi

                        ? escapeHTML(
                            bmi.note
                        )

                        : "Chưa đủ dữ liệu."
                }
            </p>

        </div>



        <div class="safety-box">

            <h3>
                RMR và TDEE
            </h3>

            <p>
                ${
                    rmr

                        ? escapeHTML(
                            rmr.note
                        )

                        : ""
                }
            </p>

            <p
                style="
                    margin-top:10px;
                "
            >

                ${
                    tdee

                        ? escapeHTML(
                            tdee.note
                        )

                        : ""
                }

            </p>

        </div>



        <!-- =============================================
             DINH DƯỠNG
        ============================================== -->

        <div
            style="
                margin-top:45px;
            "
        >

            <span class="eyebrow">
                CHIẾN LƯỢC DINH DƯỠNG
            </span>

            <h2
                style="
                    margin:8px 0 20px;
                "
            >
                Năng lượng và macro khởi đầu
            </h2>

        </div>



        <div class="result-grid">


            <div class="result-stat">

                <span>
                    Calorie
                </span>

                <strong>
                    ${
                        calorie

                            ? `${calorie.min}–${calorie.max}`

                            : "—"
                    }
                </strong>

                <span>
                    kcal/ngày
                </span>

            </div>


            <div class="result-stat">

                <span>
                    Protein
                </span>

                <strong>
                    ${
                        protein

                            ? `${protein.min}–${protein.max}`

                            : "—"
                    }
                </strong>

                <span>
                    g/ngày
                </span>

            </div>


            <div class="result-stat">

                <span>
                    Chất béo
                </span>

                <strong>
                    ${
                        fat

                            ? `${fat.min}–${fat.max}`

                            : "—"
                    }
                </strong>

                <span>
                    g/ngày
                </span>

            </div>


            <div class="result-stat">

                <span>
                    Carbohydrate
                </span>

                <strong>
                    ${
                        carbs
                            ? carbs.value
                            : "—"
                    }
                </strong>

                <span>
                    g/ngày
                </span>

            </div>

        </div>



        <div class="safety-box">

            <h3>
                Vì sao chọn mức năng lượng này?
            </h3>

            <p>
                ${
                    calorie

                        ? escapeHTML(
                            calorie.strategy
                        )

                        : ""
                }
            </p>

            <p
                style="
                    margin-top:10px;
                "
            >

                ${
                    calorie

                        ? escapeHTML(
                            calorie.note
                        )

                        : ""
                }

            </p>

        </div>



        <!-- =============================================
             WORKOUT
        ============================================== -->

        ${
            buildWorkoutReportHTML(
                workoutResult
            )
        }



        <!-- =============================================
             RECOVERY
        ============================================== -->

        <div
            style="
                margin-top:55px;
            "
        >

            <span class="eyebrow">
                PHỤC HỒI
            </span>

            <h2
                style="
                    margin:8px 0 20px;
                "
            >
                Giấc ngủ và mức sẵn sàng
            </h2>

        </div>



        <div class="result-grid">


            <div class="result-stat">

                <span>
                    Giấc ngủ
                </span>

                <strong>
                    ${
                        recovery
                            ? `${recovery.sleepHours} giờ`
                            : "—"
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Năng lượng
                </span>

                <strong>
                    ${
                        recovery
                            ? `${recovery.energy}/10`
                            : "—"
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Stress
                </span>

                <strong>
                    ${
                        recovery
                            ? `${recovery.stress}/10`
                            : "—"
                    }
                </strong>

            </div>


            <div class="result-stat">

                <span>
                    Mức mệt
                </span>

                <strong>
                    ${
                        recovery
                            ? `${recovery.fatigue}/10`
                            : "—"
                    }
                </strong>

            </div>

        </div>



        <div class="safety-box">

            <h3>
                Ưu tiên phục hồi
            </h3>

            <p>
                ${
                    recovery

                        ? escapeHTML(
                            recovery.sleepAction
                        )

                        : ""
                }
            </p>

        </div>



        <!-- =============================================
             TRẠNG THÁI
        ============================================== -->

        <div
            class="safety-box"
            style="
                margin-top:40px;
            "
        >

            <h3>
                Báo cáo hiện tại đã hoàn thành
            </h3>

            <p>

                SportHub đã xử lý dữ liệu thể trạng,
                năng lượng, macro dinh dưỡng,
                phục hồi và kế hoạch tập 7 ngày.

            </p>

            <p
                style="
                    margin-top:10px;
                "
            >

                Giai đoạn tiếp theo sẽ bổ sung
                thực đơn 7 ngày, macro từng bữa,
                món thay thế, ăn ngoài và
                hệ thống theo dõi tiến trình.

            </p>

        </div>

    `;



    resultSection
        .classList
        .add(
            "active"
        );


    resultSection
        .scrollIntoView({

            behavior:
                "smooth"

        });

}



/* =========================================================
   16. KHỞI TẠO
========================================================= */

showStep();