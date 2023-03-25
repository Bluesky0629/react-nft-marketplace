import React, { useReducer, useState } from "react";
import Search from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ReactComponent as SelectedDropItem } from '../assets/img/icon/dropdownitem.svg';
import { ReactComponent as DropItem } from '../assets/img/icon/dropdownitemclose.svg';
import { ReactComponent as OrSvg } from '../assets/img/icon/or.svg';
import { ReactComponent as DeleteSvg } from '../assets/img/icon/delete.svg';
import { memo } from "react";
import { useEffect } from "react";
import CryptoBtn from "./cryptoBtn";

const searchContent = ["Collection Name", "ME Floor Price", "Volume"];
const searchStyle = ["contains", "equals", "begins with", "ends with"];
const btnName = ["SOL", "ETH", "MATIC"];

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];


const SetSearch = () => {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
      );
    const [isSeachMenu, setIsSearchMenu] = useState(false);
    const [dropdowns, setDropDowns] = useState([]);
    useEffect(() => {
        setDropDowns(initialTasks);
    })

    function hadleDeleteTask(taskId){
        dispatch({
            type:'deleted',
            id: taskId
        })
    }
    return (
        <><div className="set-search">
            <div className="pc-search-header"
                onClick={() => {
                    setIsSearchMenu(!isSeachMenu);
                }}>
                <div>
                    <Search />
                    Search
                </div>
                <div>
                    {
                        isSeachMenu ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)
                    }

                </div>
            </div>
            <div className="pc-search-body" style={{ display: isSeachMenu ? "flex" : "none" }}>
                <SearchList tasks={tasks} onDeletTask={hadleDeleteTask}/>
            </div>
        </div>
        </>
    )
}
export default memo(SetSearch);


function tasksReducer(tasks, action){
    switch(action.type){
        case 'deleted':{
            return tasks.filter(t=>t.id != action.id)
        }
    }
}

const SearchList = ({tasks,onDeletTask}) => {
    return(
        tasks.map(task => (
            <div key={task.id}>
                <SearhItem 
                    ondelete={onDeletTask}
                />
            </div>
        ))
    )
}

const SearhItem = ({task, ondelete}) => {
    return (
        <>
            <div className="searchitem">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-4 m-0 pr-1 pl-1">
                            <Dropdown dropItemArr={searchContent} isDropContent={false} />
                        </div>
                        <div className="col-xxl-3 m-0 pr-1 pl-1">
                            <Dropdown dropItemArr={searchStyle} isDropContent={false} />
                        </div>
                        <div className="col-xxl-2 m-0 pr-1 pl-1">
                            <div className="pc-search-pattern">
                                <input id="dropDownId"></input>
                            </div>
                        </div>
                        <div className="col-xxl-3 m-0 pr-1 pl-1">
                            <div className="pc-crypto">
                                <CryptoBtn btnArr={btnName} />
                                <OrSvg />
                                <DeleteSvg onClick={() => ondelete(task.id)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="pc-crypto">
                            <div className="pc-addfilter-btn">
                                +Add filter
                            </div>
                            <div className="pc-search-btn">
                                Search
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


const Dropdown = (props) => {
    let dropItemArr = props.dropItemArr;
    let isDropContent = props.isDropContent;
    const [isopen, setIsOpen] = useState(false);
    const [isSelectedItem, setIsSelectedItem] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        setName(dropItemArr[0]);
        setIsOpen(isDropContent);
    }, [])
    return (
        <>
            <div className="pc-dropdown">
                <div className="pc-drodown-header" onClick={() => setIsOpen(!isopen)}>
                    <div className="header-name">
                        {name}
                    </div>
                    <div>
                        {
                            isopen ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)
                        }

                    </div>
                </div>
                <div className="pc-dropdown-container" style={{ display: isopen ? "block" : "none" }}>
                    {
                        dropItemArr.map((name, index) => (
                            <div key={index}>
                                <div className="pc-dropdown-item"
                                    onClick={() => {
                                        setIsSelectedItem(index);
                                        setIsOpen(!isopen);
                                        setName(name);
                                    }}
                                >
                                    <span>
                                        {
                                            isSelectedItem == index ? (<SelectedDropItem />) : (<DropItem />)
                                        }
                                    </span>
                                    <div style={{ color: isSelectedItem == index ? "#e93a88" : "" }}>
                                        {name}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
} 