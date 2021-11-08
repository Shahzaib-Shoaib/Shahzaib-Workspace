import {useState} from 'react'

const Count = () => {
    const [name, setName] = useState('')
    const [wordsCount, setWordsCount] = useState(0)
    const updateName = (e) => {
        setName(e?.target?.value)
       /* let inputName = e?.target?.value
        let isSpace = 0
        for (var i = 0; i < inputName?.length; i++) {
            if (inputName[i] === ' ') {
                isSpace++
            }
        }*/
        setWordsCount(e?.target?.value?.trim()?.split(' ')?.length)
        //console.log('isSpace', isSpace)
    }

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Enter Your Name Here" onChange={updateName} />
            <p>Characters Count: {name?.length}</p>
            <p>Words Count: {wordsCount}</p>


        </div>
    )
}

export default Count
