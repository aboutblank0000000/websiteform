import * as AiIcons from 'react-icons/ai'
export const loginform = [
    {
        label:'Email',
        name: 'Email',
        id:'txtEmail',
        type: 'Email',
        placeholder: 'Email',
        icon:<AiIcons.AiOutlineMail/>

    },
    {
        label:'Password',
        name: 'Password',
        id:'txtPassword',
        type: 'password',
        placeholder: 'Password',
        icon:<AiIcons.AiFillUnlock/>
    },
]
export const userInputs= [
    {
        label: 'Email',
        id: 'email',
        type: 'email',
        placeholder: 'Email',
        icon: <AiIcons.AiOutlineMail/>,
    },
    {
        label: 'Password',
        id: 'password',
        type: 'password',
        placeholder: 'Password',
        icon: <AiIcons.AiFillUnlock/>,
    },
    {
        label: 'Password Confirmation',
        id: 'passwordconfirmation',
        type: 'password',
        placeholder: 'Confirm Password',
        icon: <AiIcons.AiFillCheckCircle/>,
    }
]
export const gameUsed = [
    {
        label: 'Username',
        placeholder:'username',     
        id:'Username'   
    },

]