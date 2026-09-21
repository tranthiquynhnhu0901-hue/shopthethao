/* =========================================================
   SPORTHUB INFO PAGES
   About + Contact
========================================================= */


/* =========================================================
   1. SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "revealed"
                            );

                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".reveal"
    )
    .forEach(
        element => {

            revealObserver
                .observe(
                    element
                );

        }
    );



/* =========================================================
   2. FLOATING CONTACT
========================================================= */

function toggleSupportMenu() {

    const menu =
        document.getElementById(
            "floatingSupportMenu"
        );


    if (!menu) {
        return;
    }


    menu.classList.toggle(
        "active"
    );

}


document.addEventListener(
    "click",
    event => {

        const floating =
            document.querySelector(
                ".floating-contact"
            );


        const menu =
            document.getElementById(
                "floatingSupportMenu"
            );


        if (
            !floating ||
            !menu
        ) {
            return;
        }


        if (
            !floating.contains(
                event.target
            )
        ) {

            menu.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   3. CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const topicSelect =
    document.getElementById(
        "contactTopic"
    );



/* =========================================================
   4. DYNAMIC FORM
========================================================= */

function updateDynamicFields() {

    if (!topicSelect) {
        return;
    }


    const topic =
        topicSelect.value;


    const bulk =
        document.getElementById(
            "bulkFields"
        );


    const order =
        document.getElementById(
            "orderFields"
        );


    const business =
        document.getElementById(
            "businessFields"
        );


    [
        bulk,
        order,
        business
    ]
        .forEach(
            section => {

                if (section) {

                    section.classList.remove(
                        "active"
                    );

                }

            }
        );


    if (
        topic ===
        "Đặt hàng số lượng lớn" ||
        topic ===
        "Yêu cầu báo giá"
    ) {

        bulk
            ?.classList
            .add(
                "active"
            );

    }


    if (
        topic ===
        "Hỗ trợ đơn hàng"
    ) {

        order
            ?.classList
            .add(
                "active"
            );

    }


    if (
        topic ===
        "Hợp tác kinh doanh" ||
        topic ===
        "Cung cấp / phân phối sản phẩm"
    ) {

        business
            ?.classList
            .add(
                "active"
            );

    }

}


topicSelect
    ?.addEventListener(
        "change",
        updateDynamicFields
    );



/* =========================================================
   5. CTA → FORM
========================================================= */

function selectContactTopic(
    topic
) {

    if (!topicSelect) {
        return;
    }


    topicSelect.value =
        topic;


    updateDynamicFields();


    document
        .getElementById(
            "contactFormSection"
        )
        ?.scrollIntoView({
            behavior:
                "smooth"
        });


    setTimeout(
        () => {

            topicSelect.focus();

        },
        600
    );

}



/* =========================================================
   6. ERROR HELPERS
========================================================= */

function clearFieldError(
    input,
    errorElement
) {

    if (input) {

        input.classList.remove(
            "input-error"
        );

        input.classList.remove(
            "input-success"
        );

    }


    if (errorElement) {

        errorElement.textContent =
            "";

    }

}


function setFieldError(
    input,
    errorElement,
    message
) {

    if (input) {

        input.classList.add(
            "input-error"
        );

        input.classList.remove(
            "input-success"
        );

    }


    if (errorElement) {

        errorElement.textContent =
            message;

    }

}


function setFieldSuccess(
    input
) {

    if (!input) {
        return;
    }


    input.classList.remove(
        "input-error"
    );


    input.classList.add(
        "input-success"
    );

}



/* =========================================================
   7. VALIDATION
========================================================= */

function validateContactForm() {

    const name =
        document.getElementById(
            "contactName"
        );


    const phone =
        document.getElementById(
            "contactPhone"
        );


    const email =
        document.getElementById(
            "contactEmail"
        );


    const topic =
        document.getElementById(
            "contactTopic"
        );


    const message =
        document.getElementById(
            "contactMessage"
        );


    const nameError =
        document.getElementById(
            "contactNameError"
        );


    const phoneError =
        document.getElementById(
            "contactPhoneError"
        );


    const emailError =
        document.getElementById(
            "contactEmailError"
        );


    const topicError =
        document.getElementById(
            "contactTopicError"
        );


    const messageError =
        document.getElementById(
            "contactMessageError"
        );


    let valid =
        true;


    [
        [name, nameError],
        [phone, phoneError],
        [email, emailError],
        [topic, topicError],
        [message, messageError]
    ]
        .forEach(
            pair => {

                clearFieldError(
                    pair[0],
                    pair[1]
                );

            }
        );



    /* NAME */

    if (
        !name.value.trim() ||
        name.value.trim().length < 2
    ) {

        setFieldError(
            name,
            nameError,
            "Vui lòng nhập họ và tên."
        );

        valid =
            false;

    }

    else {

        setFieldSuccess(
            name
        );

    }



    /* PHONE */

    const normalizedPhone =
        phone.value
            .replace(
                /[\s.-]/g,
                ""
            );


    const phoneRegex =
        /^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/;


    if (
        !phoneRegex.test(
            normalizedPhone
        )
    ) {

        setFieldError(
            phone,
            phoneError,
            "Vui lòng nhập số điện thoại hợp lệ."
        );

        valid =
            false;

    }

    else {

        setFieldSuccess(
            phone
        );

    }



    /* EMAIL */

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailRegex.test(
            email.value.trim()
        )
    ) {

        setFieldError(
            email,
            emailError,
            "Vui lòng nhập địa chỉ email hợp lệ."
        );

        valid =
            false;

    }

    else {

        setFieldSuccess(
            email
        );

    }



    /* TOPIC */

    if (
        !topic.value
    ) {

        setFieldError(
            topic,
            topicError,
            "Vui lòng chọn chủ đề liên hệ."
        );

        valid =
            false;

    }

    else {

        setFieldSuccess(
            topic
        );

    }



    /* MESSAGE */

    if (
        message.value
            .trim()
            .length < 10
    ) {

        setFieldError(
            message,
            messageError,
            "Vui lòng mô tả nhu cầu rõ hơn."
        );

        valid =
            false;

    }

    else {

        setFieldSuccess(
            message
        );

    }


    return valid;

}



/* =========================================================
   8. SUBMIT
========================================================= */

contactForm
    ?.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            if (
                !validateContactForm()
            ) {

                return;

            }


            const button =
                document.getElementById(
                    "contactSubmit"
                );


            const buttonText =
                document.getElementById(
                    "contactSubmitText"
                );


            const status =
                document.getElementById(
                    "contactFormStatus"
                );


            button.disabled =
                true;


            button.classList.add(
                "loading"
            );


            buttonText.textContent =
                "Đang gửi yêu cầu...";


            status.className =
                "form-status";


            status.innerHTML =
                "";


            const formData =
                new FormData(
                    contactForm
                );


            const payload =
                Object.fromEntries(
                    formData.entries()
                );


            payload._subject =
                "Yêu cầu liên hệ mới từ SPORTHUB";


            payload["Trang gửi"] =
                window.location.href;


            try {

                const response =
                    await fetch(
                        "https://formsubmit.co/ajax/vohoankhangg@gmail.com",
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    payload
                                )

                        }
                    );


                if (
                    !response.ok
                ) {

                    throw new Error(
                        "SUBMIT_FAILED"
                    );

                }


                const result =
                    await response.json();


                if (
                    result.success === false
                ) {

                    throw new Error(
                        "SUBMIT_FAILED"
                    );

                }


                status.className =
                    "form-status success";


                status.innerHTML = `

                    <strong>
                        ✓ Gửi yêu cầu thành công
                    </strong>

                    <p>
                        Cảm ơn bạn đã liên hệ với SPORTHUB.
                        Thông tin đã được ghi nhận và
                        sẽ được kiểm tra để phản hồi
                        trong thời gian sớm nhất.
                    </p>

                `;


                button.classList.remove(
                    "loading"
                );


                button.classList.add(
                    "success"
                );


                buttonText.textContent =
                    "ĐÃ GỬI";


                contactForm.reset();


                updateDynamicFields();


                setTimeout(
                    () => {

                        button.disabled =
                            false;

                        button.classList.remove(
                            "success"
                        );

                        buttonText.textContent =
                            "GỬI LIÊN HỆ";

                    },
                    5000
                );

            }


            catch (error) {

                button.disabled =
                    false;


                button.classList.remove(
                    "loading"
                );


                buttonText.textContent =
                    "THỬ LẠI";


                status.className =
                    "form-status error";


                status.innerHTML = `

                    <strong>
                        Không thể gửi yêu cầu.
                    </strong>

                    <p>
                        Vui lòng kiểm tra lại thông tin
                        hoặc thử lại.
                    </p>

                    <p>
                        Bạn cũng có thể gọi
                        <a href="tel:+84862609531">
                            0862 609 531
                        </a>
                        hoặc gửi email đến
                        <a href="mailto:vohoankhangg@gmail.com">
                            vohoankhangg@gmail.com
                        </a>.
                    </p>

                `;

            }

        }
    );