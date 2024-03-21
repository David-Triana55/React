import './App.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'

function App(){
    return (
        <div className='App'>
            <TwitterFollowCard
                initialFollowing
                userName='midudev'
                name='miguel angel duran' 
            />
            <TwitterFollowCard 
                initialFollowing    
                userName='pheralb'
                name='pablo hernandez' 
            />
            <TwitterFollowCard 

                initialFollowing
                userName='elonmusk'
                name='Elon Musk'
            />
            <TwitterFollowCard 
                
                initialFollowing
                userName='vxnder'
                name='Vanderhart' 
            />
        </div>
    )
}

export {App}