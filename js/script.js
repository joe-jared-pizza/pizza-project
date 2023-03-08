const triggerTabList = document.querySelectorAll("#myTab button")
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener("click", event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })

const triggerFirstTabElNextButton = document.querySelectorAll("#size-and-crust-next-step-btn")
    triggerFirstTabElNextButton.forEach(triggerBtn => {
        const btnTrigger = new bootstrap.Tab(triggerBtn)
        
        triggerBtn.addEventListener("click", event => {
            event.preventDefault()
            btnTrigger.show()
        })
    })

const triggerEl = document.querySelector('#myTab button [data-bs-target="#size-and-crust-tab"]')
bootstrap.Tab.getInstance(triggerEl).show()

const triggerFirstTabEl = document.querySelector(`#myTab li:first-child button`)
bootstrap.Tab.getInstance(triggerFirstTabEl).show()

const triggerLastTabEl = document.querySelector(`#myTab li:last-child button`)
bootstrap.Tab.getInstance(triggerLastTabEl).show()

const triggerMiddleTabEl = document.querySelectorAll(`#myTab li`)[1].firstElementChild;
bootstrap.Tab.getInstance(triggerMiddleTabEl).show()

const triggerBtn = document.querySelector(`#size-and-crust-next-step-btn [data-bs-target="#cheese-and-sauce-tab"]`)
bootstrap.Tab.getInstance(triggerBtn).show()