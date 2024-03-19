$('document').ready(() => {

    let openedPopUpEventId =  null;

    $('.event').click(function () {
        let eventNo = $(this).attr('eventNo');
        openedPopUpEventId = eventNo;

        $('.overlay').css({
            "top":  $(window).scrollTop() + 'px'
        });

        $('.overlay').css({
            "display": "block"
        });
        $('.' + eventNo + '-event').css({
            "display": "block"
        });

        $('section').addClass('blur');
        $('html').addClass('disabled-scrolling');
        $('.' + eventNo + '-event').removeClass('modalPopdown');
        $('.' + eventNo + '-event').addClass('modalPopup');
    });

    let closeModalAction = function () {
        let eventNo = $(this).attr('eventNo') || openedPopUpEventId;
        let s1 = $('.overlay');
        setTimeout(() => {
            $('section').removeClass('blur');
            let s = $('.overlay');
            $('.overlay').css({
                "display": "none"
            });
            $('.' + eventNo + '-event').css({
                "display": "none"
            });
        }, 300);

        $('.' + eventNo + '-event').removeClass('modalPopup');
        $('.' + eventNo + '-event').addClass('modalPopdown');
        $('html').removeClass('disabled-scrolling');
        openedPopUpEventId = null;
    }

    $('.modal-close-btn').click(closeModalAction);
    $('.overlay').click(closeModalAction);
    $('.event-details').click((e) => e.stopPropagation());
    $(document).keyup(e => e.keyCode == 27 && openedPopUpEventId && closeModalAction());

    //form 
    const showConfirmMsg = IsSent => {
        const successHtml =
            `
                <div class="msg-sent-confirm" style="color:green;">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    Message Sent!
                </div>
            `;

        const failedHtml =
            `
                <div class="msg-sent-confirm" style="color:red;">
                    <i class="fa fa-ban" aria-hidden="true"></i>
                    Opps! Somthing Went Wrong!
                </div>
            `;
        const targetHtml = IsSent ? successHtml : failedHtml;

        $('#msgSentConfirm').html('');
        $('#msgSentConfirm').html(targetHtml);
        $('.msg-sent-confirm').fadeIn();
        $('.msg-sent-confirm').delay(2000).fadeOut();

    }

    let feedbackForm = document.querySelector('.feedback');
    feedbackForm.addEventListener('submit', e => {
        e.preventDefault();
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let phone = document.querySelector('#phone');
        let message = document.querySelector('#message');
        let submitBtn = document.getElementById('formSubmit');
        submitBtn.disabled = true
        submitBtn.innerHTML = "Sending...";
        $.ajax({
            url: "https://formspree.io/tushar.srivastava.587@gmail.com",
            method: "POST",
            data: {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            },
            dataType: "json",
            success: () => {
                showConfirmMsg(true);
                name.value = "";
                email.value = "";
                phone.value = "";
                message.value = "";
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Send Message";
            },
            error: () => {
                showConfirmMsg(false);
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Send Message";
            }
        });
    });

});