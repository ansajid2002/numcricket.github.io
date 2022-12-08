import React, { useContext, useState, createContext } from "react";


const myContext = createContext()

export default function ContextPro(props) {

    const [runs, setRuns] = useState(0)
    const [rnum, setRnum] = useState(0)
    const [isOut, setIsout] = useState(false)
    const [isAlive, setIsAlive] = useState(true)
    const [wicket, setWicket] = useState(0)


    let rno = 0;
    function getRandom() {
        rno = Math.floor(Math.random() * 6) + 1
        if (rno === 5) {
            getRandom()
        }
        else {
            return rno
        }
    }

    const rone = () => {
        let val = 1
        getRandom()
        setRnum(rno)
        setIsout(false)
        if (rno === val) {
            setIsout(true)

            setWicket(prev => prev + 1)
            if (wicket === 2) {
                setIsAlive(false)
            }
        }
        else {
            setRuns((prev) => prev += 1)
        }
    }

    const rtwo = () => {
        let val = 2
        getRandom()
        setRnum(rno)
        setIsout(false)
        if (rno === val) {
            setIsout(true)

            setWicket(prev => prev + 1)
            if (wicket === 2) {
                setIsAlive(false)
            }
        }
        else {
            setRuns((prev) => prev += 2)
        }
    }

    const rthree = () => {
        let val = 3
        getRandom()
        setRnum(rno)
        setIsout(false)
        if (rno === val) {
            setIsout(true)

            setWicket(prev => prev + 1)
            if (wicket === 2) {
                setIsAlive(false)
            }
        }
        else {
            setRuns((prev) => prev += 3)
        }
    }

    const rfour = () => {
        let val = 4
        getRandom()
        setRnum(rno)
        setIsout(false)
        if (rno === val) {
            setIsout(true)

            setWicket(prev => prev + 1)
            if (wicket === 2) {
                setIsAlive(false)
            }
        }
        else {
            setRuns((prev) => prev += 4)
        }
    }

    const rsix = () => {
        let val = 6
        getRandom()
        setRnum(rno)
        setIsout(false)
        if (rno === val) {
            setIsout(true)

            setWicket(prev => prev + 1)
            if (wicket === 2) {
                setIsAlive(false)
            }
        }
        else {
            setRuns((prev) => prev += 6)
        }
    }
    const norun = () => {
        return null
    }

    const restart = () => {
        setRnum(0)
        setIsAlive(true)
        setWicket(0)
        setRuns(0)
        setIsout(false)
    }

    const save = () => {

        localStorage.setItem(new Date().getTime().toString(), JSON.stringify({ runs }))

        setRnum(0)
        setIsAlive(true)
        setWicket(0)
        setRuns(0)
        setIsout(false)
    }
    
    const reset = () => {
        localStorage.clear()
        window.location.reload();
    }

    return (
        <myContext.Provider value={{
            runs,
            rnum,
            isOut,
            isAlive,
            rone,
            rtwo,
            rthree,
            rfour,
            rsix,
            norun,
            wicket, restart, save, reset
        }}>
            {props.children}
        </myContext.Provider>
    )
}

export const useGlobalContext = () => {
    return (
        useContext(myContext)
    )
}





