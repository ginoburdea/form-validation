const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'British Virgin Islands',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'North Korea',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'U.S. Virgin Islands',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States Minor Outlying Islands',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Åland Islands',
]

const validateEmail = email => {
    if (email.length < 5)
        throw new Error('Email must be at least 5 characters long')
    if (email.length > 30)
        throw new Error('Email must be less than 30 characters long')

    const emailRegexp = /[a-z0-9\._]+@[a-z0-9\._-]+\.[a-z]+/i
    if (!emailRegexp.test(email)) throw new Error('Invalid email address')
}

const validatePassword = password => {
    if (password.length < 8)
        throw new Error('Password must be at least 8 characters long')
    if (password.length > 32)
        throw new Error('Password must be less than 32 characters long')

    const passwordRegexp = /[a-z0-9_.-]/i
    if (!passwordRegexp.test(password))
        throw new Error(
            'Password can only contain letters, numbers, underscores, dots and hyphens'
        )
}

const validateAge = age => {
    if (age % 1 > 0) throw new Error('Age must be an integer')
    if (age <= 0) throw new Error('Age must be greater than 0')
    if (age > 100) throw new Error('Age must be less than 100')
}

const validateCountry = (country, validOptions) => {
    if (validOptions.indexOf(country) === -1)
        throw new Error('Invalid country. You must choose one from the list')
}

const validateGender = (gender, validOptions) => {
    if (validOptions.indexOf(gender) === -1)
        throw new Error('Invalid gender. You must choose one from the list')
}

const validateInterests = interests => {
    if (interests.length < 2)
        throw new Error('You must select at least 2 interests')
}

const fields = [
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        validation: validateEmail,
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        validation: validatePassword,
    },
    {
        name: 'age',
        type: 'number',
        label: 'Age',
        validation: validateAge,
    },
    {
        name: 'country',
        type: 'text',
        label: 'Country of residence',
        options: countries,
        validation: validateCountry,
    },
    {
        name: 'gender',
        type: 'select',
        label: 'Gender',
        options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
        ],
        validation: validateGender,
    },
    {
        name: 'interests',
        type: 'checkbox',
        label: 'Interests',
        options: [
            { name: 'music', label: 'Music' },
            { name: 'business', label: 'Business' },
            { name: 'painting', label: 'Painting' },
            { name: 'sports', label: 'Sports' },
        ],
        validation: validateInterests,
    },
]

const successMessage = document.getElementById('successMessage')

const createSelectEl = field => {
    const el = document.createElement('select')
    el.name = field.name
    el.id = `field_${field.name}`
    el.classList.add('form-select')

    const emptyOptionEl = document.createElement('option')
    emptyOptionEl.innerText = 'Select a value'
    emptyOptionEl.disabled = true
    emptyOptionEl.selected = true
    el.appendChild(emptyOptionEl)

    field.options.forEach(option => {
        const optionEl = document.createElement('option')
        optionEl.value = option.value
        optionEl.innerText = option.label
        el.appendChild(optionEl)
    })

    return el
}

const createInputEl = field => {
    const el = document.createElement('input')
    el.name = field.name
    el.id = `field_${field.name}`
    el.classList.add('form-control')
    el.type = field.type

    return el
}

const createErrorPEl = fieldName => {
    const errorP = document.createElement('p')
    errorP.classList.add('text-danger')
    errorP.classList.add('d-none')
    errorP.classList.add('m-0')
    errorP.id = `field_${fieldName}_error`

    return errorP
}

const createInputContainer = fieldType => {
    const inputContainer = document.createElement(fieldType)
    inputContainer.classList.add('p-0')

    return inputContainer
}

const createLabelEl = (text, forId) => {
    const label = document.createElement('label')
    label.innerText = text
    label.setAttribute('for', forId)
    label.classList.add('form-label')

    return label
}

const createLegendEl = text => {
    const legendEl = document.createElement('legend')
    legendEl.classList.add('fs-6')
    legendEl.innerText = text

    return legendEl
}

const createCheckboxContainerEl = (checkboxEl, labelEl) => {
    const checkboxContainerEl = document.createElement('div')
    checkboxContainerEl.classList.add('form-check')
    checkboxContainerEl.appendChild(checkboxEl)
    checkboxContainerEl.appendChild(labelEl)

    return checkboxContainerEl
}

const createCheckboxEl = (optionName, fieldName, fieldOptions) => {
    const checkboxEl = document.createElement('input')
    checkboxEl.name = optionName
    checkboxEl.id = `field_${optionName}`
    checkboxEl.classList.add('form-check-input')
    checkboxEl.type = 'checkbox'

    checkboxEl.addEventListener('input', () => {
        successMessage.classList.add('d-none')

        const errorP = document.getElementById(`field_${fieldName}_error`)
        errorP.innerText = ''
        errorP.classList.add('d-none')

        fieldOptions.forEach(opt => {
            document
                .getElementById(`field_${opt.name}_label`)
                .classList.remove('text-danger')
        })
    })

    return checkboxEl
}

const createFieldsetInputContainer = field => {
    const inputContainer = createInputContainer('fieldset')

    inputContainer.dataset.name = field.name
    inputContainer.appendChild(createLegendEl(field.label))

    field.options.forEach(option => {
        const checkboxEl = createCheckboxEl(
            option.name,
            field.name,
            field.options
        )

        const labelEl = createLabelEl(option.label, checkboxEl.id)
        labelEl.classList.add('m-0')
        labelEl.id = `field_${option.name}_label`

        inputContainer.appendChild(
            createCheckboxContainerEl(checkboxEl, labelEl)
        )
    })

    inputContainer.appendChild(createErrorPEl(field.name))

    return inputContainer
}

const createDatalistEl = (fieldName, fieldOptions) => {
    const countriesDatalist = document.createElement('datalist')
    countriesDatalist.id = `field_${fieldName}_datalist`

    fieldOptions.forEach(option => {
        const optionEl = document.createElement('option')
        optionEl.value = option
        optionEl.innerText = option

        countriesDatalist.appendChild(optionEl)
    })

    return countriesDatalist
}

const createDivInputContainer = field => {
    const el =
        field.type === 'select' ? createSelectEl(field) : createInputEl(field)

    const errorP = createErrorPEl(field.name)
    el.addEventListener('input', () => {
        successMessage.classList.add('d-none')

        errorP.innerText = ''
        errorP.classList.add('d-none')
        el.classList.remove('border-danger')
    })

    const inputContainer = createInputContainer('div')

    inputContainer.appendChild(createLabelEl(field.label, el.id))
    inputContainer.appendChild(el)
    inputContainer.appendChild(errorP)

    const fieldHasDatalist = field.options && field.type !== 'select'
    if (fieldHasDatalist) {
        const datalistEl = createDatalistEl(field.name, field.options)
        el.setAttribute('list', datalistEl.id)

        inputContainer.appendChild(datalistEl)
    }

    return inputContainer
}

const submitButton = document.getElementById('submitButton')
for (const field of fields) {
    const inputContainer =
        field.type === 'checkbox'
            ? createFieldsetInputContainer(field)
            : createDivInputContainer(field)
    submitButton.parentNode.insertBefore(inputContainer, submitButton)
}

const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    successMessage.classList.add('d-none')

    let errorsCount = 0
    fields.forEach(field => {
        try {
            if (field.type === 'checkbox') {
                const checkedCheckboxes = field.options
                    .map(option => form[option.name])
                    .map(checkbox => (checkbox.checked ? checkbox.name : null))
                    .filter(checkbox => checkbox)

                field.validation(checkedCheckboxes)
                return
            }

            if (field.type === 'number') {
                field.validation(+form[field.name].value)
                return
            }

            if (field.type === 'select') {
                field.validation(
                    form[field.name].value,
                    field.options.map(option => option.value)
                )
                return
            }

            if (field?.options) {
                field.validation(form[field.name].value, field.options)
                return
            }

            field.validation(form[field.name].value)
        } catch (validationError) {
            errorsCount++

            const errorP = document.getElementById(`field_${field.name}_error`)
            errorP.classList.remove('d-none')
            errorP.innerText = validationError.message

            if (field.type !== 'checkbox') {
                form[field.name].classList.add('border-danger')
                return
            }

            field.options
                .filter(option => !form[option.name].checked)
                .forEach(option => {
                    document
                        .getElementById(`field_${option.name}_label`)
                        .classList.add('text-danger')
                })
        }
    })

    if (errorsCount === 0) successMessage.classList.remove('d-none')
})
