
'use strict';

angular

    .module('layout.apaleev')

    .controller('apaleevController', function ($scope, $log, fromRoot) {

        var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    name: 'Bower',
                    logo: 'https://libraries.io/assets/bower/bower-2b966bdccce8fcfcfb81cc75b7b113b01c311bc508413961dc189ff75b1b637c.png',
                    description: 'Manages all these things for you.',
                    url: 'https://gulp.readme.io/docs'
                },
                {
                    rank: 2,
                    name: 'Gulp',
                    logo: 'http://cloud.atechmedia.com/blog/finding-a-frontend-workflow-isnt-easy/gulp.png',
                    description: 'Automate and enhance your workflow.',
                    url: 'https://gulp.readme.io/docs'
                },
                {
                    rank: 3,
                    name: 'Angular',
                    description: 'HTML enhanced for web apps!',
                    url: 'https://docs.angularjs.org/api',
                    logo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/68939/angular-logo.png',
                },
                {
                    rank: 4,
                    name: 'JQuery',
                    description: 'DOM Traversal and Manipulation',
                    url: 'https://api.jquery.com/',
                    logo: 'https://brand.jquery.org/resources/jquery-mark-light.gif',
                },
                {
                    rank: 5,
                    name: 'Lodash',
                    description: 'A modern JavaScript utility library.',
                    url: 'https://api.jquery.com/',
                    logo: 'data:image/jpeg;base64,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',
                },
                {
                    rank: 6,
                    name: 'Moment',
                    description: 'Parse, validate and manipulate dates.',
                    url: 'http://momentjs.com/docs/',
                    logo: 'data:image/png;base64,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',
                },
                {
                    rank: 7,
                    name: 'Bootstrap',
                    description: 'Designed for everyone, everywhere.',
                    url: 'http://getbootstrap.com/',
                    logo: 'data:image/jpeg;base64,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',
                },
                {
                    rank: 8,
                    name: 'angular-bootstrap',
                    description: 'Bootstrap components written in pure AngularJS.',
                    url: 'https://angular-ui.github.io/bootstrap/',
                    logo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnPV51-ZQPUUKiRON4AdpNyblrnYQ3zUhyfARWGla8fOxY2C34qA',
                },
                {
                    rank: 9,
                    name: 'font-awesome',
                    description: 'Font Awesome gives you scalable vector icons.',
                    url: 'http://fontawesome.io/',
                    logo: 'http://ahmed-badawy.com/blog/wp-content/uploads/2015/02/fontawesome.png',
                },
                {
                    rank: 10,
                    name: 'angular-ui-router',
                    description: 'Easy way make application states.',
                    url: 'https://github.com/angular-ui/ui-router',
                    logo: 'data:image/jpeg;base64,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',
                },
                {
                    rank: 11,
                    name: 'restangular',
                    description: 'Easy way make application requests.',
                    url: 'https://github.com/mgonto/restangular',
                    logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBAQEBAVFRUXEBUVFRUVFRUVEBgVFxUWGBUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGy0lICY4NystMCsrKy0tLS0rLTMtKy0vLS8tLS0tLS0tLS0tKy0rLS0tLS0tKystKystLSsrMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAQMECAL/xABGEAABAwIACAgMBAUEAwEAAAABAAIDBBEFBhIhMVFxkQciQWGBobLBEzIzNVJicnOSsbPRIzSDohZCVGOCk8LS4RRD8CT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAoEQEAAgEDAwQCAgMAAAAAAAAAAQIDBBExITJBEhMzcVHRImEUkfD/2gAMAwEAAhEDEQA/ANxREQEREBERAREQEXTUVccYu94btOfoGkqIqsZGDNGwu5zmb9/kgnV5qqvij8d4B1aXbgqnVYXnk0vyRqbxRv0leBBY6rGUaImdLvsPuoeqwlNJ4zzbUMzdw0rwTzsYLvcGjWSAoStxqhbmjBkOvxWbzn6lOmO1+2HJtEcrTS4Rmj8R5tqOdu4qXpcZeSVnS37H7rNcH48Uz7CVrojrtls3tz9SsdLVRyDKje141tIPyUZiY5d3X+lwlDJ4rxfUcztxXrWdr2UuFJo/FebancYdejoXBeEVepcZRolZbnbnG4qYpa+KTxHgnVoduOdB6UREBERAREQEREBERAREQEX5e8NF3EAaybBRdVh+FmZpLz6ujeUEsuuadjBd7g0c5AVVqsYJnZm2YObO7efsouSRzjdxJOsm5QWmqxiibmYC8/C3ec/Uoeqw5O/Q7IGpuY79KjFGVuHqeO4L8o6mcY79AUq1m3SIcmYjlKOJJuTc6zpX4e8AXcQBrJsN5VQrcbJHZomBg1njO+w61B1NXJIbyPc7ac3QNAWqmjvPd0VzljwulbjLTszNJkOpuj4jm3XUDW40TvzMtGObO7ee4KCXK100uOvjf7VTktL9TSuecp7i46yST1r8IuVoQQYX7hmcw5THFp1tJad4X4CLymhY8H451cdg8tlHrizvib33VmwfjtSvsJMqI+sMpnxN7wFmyKM0iXd5bVT1DJG5Ub2vGtpBHUu1YrT1D4zlRvcw62kg9SsOD8dqqOwkyZR6wyX/ABNzbwVXOOfCXqavS4XnjtZ9xqdxh151MUuMrTmkYRztzjdp+azbB+OlLJYPJiPri7fiHfZWCCZr2hzHNc08rSCN4UJiY5S3X+mrYpPEeDzXz7jnXoWdgqQpcNTs/nyhqdn69PWuC6IoKlxkYc0jS3nHGb91L09VG8XY8O2HP0jkQdyIiAiIg6auoEbHPIJAF7DSq3VYxyOzMaGDX4zvt1Kw4SZlQyj+275KiIOyed7zd7i485vu1LrUDhrGLwL3RNju4AZ3Gzc4BzAZzp5lWq3DVRLmdIQPRbxW9WnpWnHpb3jfiFdskQu1bhaCLx5Bf0RnduCga3G46IY7es//AIj7qrItlNJSvPVVOWZeuswlNL5SQkatDdwzLyIi0xERG0K99xERdcFecUsRGVMEdTLO4NflWYxoDuK9zTd5v6OpUZbVweebKX9X60izaq9qU3qsxxEz1RONWLVHTYOqHQwtDgGcd3Gk8dt+MdHQsrW1cIPm6p2M+o1YquaO02pMz+XcsbShArVibgOCpjn8KDdrmhrmkhwuDfmPSFVQrzwbytDahpcAS9hAJFzmOgcqxX4Wxy82EMQ5W3MEoePReMl28XB6lWq/Bs8JtNE5nORxehwzFbIuHAEWIuOUHQq4yT5S9LEUWpYQxTo5bnwfg3a4+L+3R1Ks4RxFnbcwvbINR4knXmO8KcXiXPTKprupaqSM5UT3MOtpI320r9VlDLEcmWNzD6wsOg6CvOporRg/HipZmla2Uc/EfvAt1KzYPxxpJMznGI6n+L8Qzb7LMUUZpEpby22KRrgHNcHA6CCCN4X7a4g3BsdYzFYtR1ssRyopHMPqki+0aD0qyYOx5qG2ErGyjWOI/qzHcq5xz4d9TVqXDk7NLssanZzv0qz4LrfDRh+Tk5yLXvo5VRgrpgBlqePnBO8lVpJBERBw9twRrFlnpFs2rMtDVCr2WllGqR3aKChY5MtUA64mncSO5QKtGPEfGhd6rhuIPeVV17OnnfFVkyd0uyCIvexg0uc1ovou4gC+9aXgzgzibY1MznnlbGMhm83J6lnWC/Lwe+j7YX0EVRq8tqbRWU8VYnlmnCPgampqanFPC1l5iCRneRkHS45zvWfLUOFz8vTe/d2CsvVulmZxxMo5O4REWhWLauDzzZS/q/WkWKrauDzzZS/q/WkWTW/HH3+1uHuOEHzdU7GfUasVW1cIPm6p2M+o1YquaLsn7dzcoRECLMmlaDGOrhsGTOI9F/Hbs42cdBCsdBj9yTw/5Rn/AGu+6o6Lk1iXd5bNg+tZPG2WMktde1wQcxscx5wvSoLEj8jDtf23KZqHEMeRpDXEbQCs8x1WP1JG1wLXNBB0ggEbioDCGJ1JJctaYna2Hi/Cc26ygcH4+yiwnia/1mcV243B6lY6HGyjlzeF8GdUgyf3eL1qXptVzeJU3DuKctOx0oe18Ytc52vFzYcXp5Cq8tRxzcDQSkEEcTOM48dvKsuVtJmY6ozAvVguLKngZ6U0Y3vAXlUxijFlVtONTi74Wk9ylPDjVyr5g9mTFENUbfkFRGtuQBymy0IC2ZZVjlERAVLw8y1RJtB3tCuiqeNLLTg62DqJCCiY7M/Cidqktvafsqer1jay9K46nsPXbvVFXq6Od8bNl7npwX5eD30fbC+givn3Bfl4PfR9sL6CKo13NU8PlQ+FzyFN793YKy9ahwueQpvfu7BWXrRpPihXl7hERaVYtq4PPNlL+r9aRYqtq4PPNlL+r9aRZNb8cff7W4e44QfN1TsZ9RqxVbVwg+bqnYz6jViq5ouyft3NyhEQIsyYiIg1LEn8jDtf23KYq/Jyew7slQ+JP5GHa/tuUxV+Tk9h3ZKz25WRwxRugLlcN0DYuVoVv22ZwaWhxDTpaCck7RoX4REBWbg+ivVl3oxOPSSB3lVlXTg1i49Q/U1jd5cT8go37ZdjloeDmXmiH9xvzV8VMxfZeoj5rn9pVzWdYIiICreNrM8TuZw+X3Ksig8bGfhMdqktvB+yCkYfZlU0w9Qndn7lna02sjyo5G62OG9pCzFeloZ/jMM+bmHqwX5eD30fbC+givn3Bfl4PfR9sL6CKr13NUsPlQ+Fz8vTe/d2CsvWocLnkKb37uwVl60aT4oV5e4REWlWLauDzzZS/q/WkWKrauDzzZS/q/WkWTW/HH3+1uHuOEHzdU7GfUasVW1cIPm6p2M+o1YquaLsn7dzcoQIgRZkxERBqWJH5GHa/tuUxV+Tk9h3ZKh8SPyMO1/bcpir8nJ7DuyVntysjhijdAXK4boGxcrQrEREBaFwbxWp5na5rdDWN/5FZ6tQxFiyaGM+k57v3kdyhk4SryvGKrLzOOqM9ZCtarmKTM8rvZHav3KxqhMREQFF4yMvTuOotPWB3qUXkwuy8Eo9Qndn7kFGWX1DMl726nuG4kLUFnOG48mpmH9wnfn71u0M/wArQpzcQ68F+Xg99H2wvoIr59wX5eD30fbC+gimu5qYfKh8LnkKb37uwVl61Dhc8hTe/d2CswWjSfFCvL3OEXK4WlWLauDzzZS/q/WkWLLaeDzzZS/q/WkWTW/HH3+1uHuOEHzdU7GfUasVW1cIPm6p2M+o1YquaLsn7dzcoQIgRZkxERBqWJP5GHa/tuUvV+Tk9h3ZKiMSPyMO1/bcpir8nJ7DuyVntysjhijdA2LlcN0DYuVoViIiAtexciyKSnb/AGmneLn5rIbXzDlzLa6ePJYxo5GgbgAq8vhKq24qM/CedcnyA+6m1GYustTs5y49Z+yk1SmIiIC/EzLtc3W0jeF+0QZ2qFjXHaqfztaf2gdy0KrZkySN1PcNxKo+Osdp43a4gNznfcLVo52yKsvaiMGeXg99H2wvoIr59wX5eD30fbC+girNdzVzD5UPhc/L03v3dgrL1qHC5+XpvfnsFZetGk+KFeXuERFpVi2ng882Uv6v1pFiy2zEBtsG0o9V53yvPeset+OPtbh7n54QfN1TsZ9RqxVbRwiPtg2o5/BjfIxYuu6L45+3c3chERFlTEREGpYkfkYdr+25TFX5OT2HdkqHxI/Iw7X9tymKvycnsO7JWe3KyOGKN0BcrhugLlaFYiIg9WCYsuogZrmYOjKF+pbKVlGJ8eVXU41Oc74WOPcFq9lTk5TqvWCmZMEQ9QdYuvUvzE2zQNQA3L9KtIREQEREFIw0y1RKPWvvAPeqTjwzNA72x2T91fsZmWqCdbGnu7lS8dI7wNOqUdYIV+mnbLVDJ2yp9M6z2HU9p3EL6IdpXzkV9DUcwfHG8fzMa7e0HvWnXR2yrw+VN4Wm/wD5IDqqR1xyLLFsfCTTF+D5SBcsex/RlBrjucT0LG1bo53xo5e5yi4RalQt2xTiyaGkb/YYd4v3rD6SmdLIyJo4z3tYNrjbvX0FBEGMYwaGtDRsAsPksOut0iF+GOZVThRmyaDJ9OaMbru/2rIlovC5WZ6aAetKR+1vyes6VukrtjhDLP8AJCIiLGtEREGpYkfkYdr+25TFX5OT2HfIqHxI/Iw7X9tymKvycnsO7JWe3KyOGKN0BcrhugLlaFYiIgs3B7FerLvRhcd5aO8rT6Nl5I265Gj9wWfcGsXGqH+qxu8uJ+QWk4DZeoiHrX3AlUZO5ZXhdkRFB0REQEREFZxsZx43a2kbj/2qXjSy9LJzFp3OCvmNrOJG7U4jeP8ApU3DMeVTzj+07eBcfJTxzteJctxLN1tWIFeJqCDPnjHgnf4Zm/tyViysmI2Mf/hzkSH8GSwf6pHiyAc2cHmPMvU1OOb06cwzY7bS2OpgbIx8bxdrmlrhrBFisPxmwBLRzFjwSwk+Df8Ayubyf5DlC3KN4cA5pBBFwQbgg6CDyrrq6WOVhjlY17Tpa4At3HlXn4M84p/pfenqfPKLYKjg8oHG4bIzmbIcn9117MF4mUMDg9sOW4aHSHLsdYB4oPPZbZ1uPbyp9qyscG2LDw4Vs7SLA+BaRnNxYyEcgsSBtvqWjkoqRwj4yiKN1JE78R7bSEfyRnSPacM2w7FimbZ8n/dF3SlVCxtwr/5VZNKDxb5DPYbmB6Tc/wCSh1yuF69axWIiGWZ3Qi7YqeR9yxjnW05LS622wXUFfODXydT7bPk5eVado3aYjdSXUso0xvG1jh3LrLCNIO4rbrrhV+7/AEl6UFiT+Rh2v7blMVfk5PYd2Su1CFXM7zukw9pzBcrZ3UEJ0wxnaxv2XS7A1KdNND/pM+yt91D0seRaNjfgmmjpJXxwRscMmzmsa0i7wDoWcqdbbuTGzQuDiK1PK70prdDWjvJWh4sMvPfUwn5DvVKxGiyaGI+k57v3kDqAV+xSZxpXamgbyfsqLcynHCyoiKLoiIgIiIInGZl4CdT2nu71T5WZTXN1gjeFeMNsvTyj1b7iD3KkoMrsiuOFMVmPu6E5LtOSc7Ds5Wqq1dJJE7JkYWnn0HYdBXtY81MnDJak15TWLWN1RR2YPxIr+Tccw15DtLflzLQcG4/0MoGW90LtUjTk/E2432WOoo5NNS/WeXa5JhvUeH6J2cVcH+qwfMroqcaqCMEuq4jzMd4Q7mXWGIqf8Kv5lL3paLjBwj3BZRMIOjwrwM3OxmvnO5Z7LI5zi5xLnEkkk3JJ0klfhFpx4q442qrtabciIisRQisWKuMTKRsrXRufluaRkkC1gRy7VXUXkzG8NS/fx/F/Tv8Aian8fxf07/iaqCi57dT1Sv38fxf07/ian8fxf07/AImqgont1PVK/fx/F/Tv+Jqfx/F/Tv8AiaqCie3U9Urdh7G+Oop3wthe0uyc5LSMzgeTYqivTg/B8s7siFhceW2gc7joCvGBcSI2WfUnwjvQHkht5XdQ5k3irvWU7i7Fk0lM3+yw7xfvV4xTZ+HI7W+24D7qrtAAAAsALADRZXDFqO1ODrc49du5Z5TSqIiAiIgIiIOCFD4QwBG+7o+I7V/Iejk6FMogodZRSRGz221HS07CvFUU7JGlr2hw1H/7MtHkjDgQ4Ag6QRcKCwhi6Dd0JsfRPi9B5Eidhl2FMVSLupzf1Haf8XcvTvValic0lrgWkaQRYrVaiB7DkvaWnn7ta8NdQRTDJkYDqOhw2HkW3FrLR0v1U2xRPDNUU/hTFiWO7ovxG6v/AGDo5ejcoEjkW+mSt43rKmazHLhFyimi4RcrhBCBEReU0iIiAi5aCSABcnQBnJ2K0YFxLmks+c+CZ6OmU9GhvTn5lyZiOXdlap4HvcGMaXOOgNFyrjgXEcmz6p1v7bTn/wAncmwb1bsGYLhp25MMYbrOl59p2kqQp4HvOSxpcebv1Kq2TfhKKvLS0scTQyNga0cjRYf9le+ioZJTZjb6zoaNpU5g/F0DjTG59EeL0nlU7GwNADQABoAzBVpIrB+AY2Wc/ju5/EGwcvSpdEQEREBERAREQEREBERB1VFOyQZL2hw5+7Uq9hDF1wu6E5Q9E+N0HlVmRBnr2FpIcCCNIOYqMwngaGfO5tnem3M7p19K0ytoY5RZ7b6jocNhVbwhgGRlyzjt5vHHRy9ClW01neHJiJ5ZThTAE0NzbLZ6TeT2hpHyUUtUKhsKYuwy3c38N+sDina37Ldi1ni/+1NsX4URF7sI4LmgP4jc3I4Z2Hp5NhXhW6totG8KZjZCBECk8D4CqKk/hss3lkdmjGw8p5gvL32aEYp3AuKtRUWcR4OP03DOfZbpO3MFcsCYp08FnOHhZPScOKD6rdA2m5VgVVsn4TiqKwNi/T0wvGy7+WR2d/R6PQpZjCSAASToAzlSuD8AySWL+I3nHHOwcnSrLRUEcQsxuflJzuO0quZ3SQWD8XXGzpjkj0R43SeRWGnp2RjJY0NHN3612ouAiIgIiICIiAiIgIiICIiAiIgIiICIiDw4QwVFLnIs70hp6darOEMDyxXNspvpDvHIroiDOnNBBBAIOkHOCq9hTFZjrugOQ70T4h2crVqOEMBxSXLeI7WBxTtCrddg6WI8dubkcM7d/J0qdMlqTvWXJrE8qRgTEmKOz6g+Ed6OiId7unNzK1taAAAAABYAZgBzL1UVBJKbMbm5SczRtKsmD8Axx2c/ju5/FGwfdRmZnl3ZA4PwTLLYgZLfSOjoHKrNg/BMUWcDKd6R09Gpe9FwEREBERAREQEREBERAREQEREBERAREQEREBERAREQF58IeSk9g/JEQdeB/IRewF7ERAREQEREBERAREQEREBERAREQf/Z',
                },
                {
                    rank: 12,
                    name: 'angular-toastr',
                    description: 'Toastr is a angular library for non-blocking notifications',
                    url: 'https://foxandxss.github.io/angular-toastr/',
                    logo: 'data:image/jpeg;base64,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',
                }
            ]
        };

    });
