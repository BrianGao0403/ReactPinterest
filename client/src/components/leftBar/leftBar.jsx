import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                <a href='/' className='logoIcon'>
                    <img src='/general/logo.png' alt='' className='logo'/>
                </a>

                <p>&nbsp;</p>

                <a href='/' className='menuIcon'>
                    <img src='/general/home.svg' alt='' />
                    <p className='menuText'>Home</p>
                </a>
                <a href='/' className='menuIcon'>
                    <img src='/general/create.svg' alt='' />
                    <p className='menuText'>Post</p>
                </a>
                <a href='/' className='menuIcon'>
                    <img src='/general/updates.svg' alt='' />
                    <p className='menuText'>Notify</p>
                </a>
                <a href='/' className='menuIcon'>
                    <img src='/general/messages.svg' alt='' />
                    <p className='menuText'>Message</p>
                </a>
            </div>
            <a href='/' className='menuIcon'>
                <img src='/general/settings.svg' alt='' />
                <p className='menuText'>Setting</p>
            </a>
        </div>
    )
}

export default LeftBar