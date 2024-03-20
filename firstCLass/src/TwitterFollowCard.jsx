import { useState } from "react"

export function TwitterFollowCard({userName, name, initialFollowing}){
    const [isFollowing, setFollow] = useState(initialFollowing)


    const handleClick = () => {
        setFollow(!isFollowing)
    }

    const text = isFollowing ? 'siguiendo' : 'seguir'
    const btn = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                    src={`https://unavatar.io/twitter/${userName}`} 
                    alt="Avatar" 
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>   

            <aside>
                <button className={btn} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
    )
}