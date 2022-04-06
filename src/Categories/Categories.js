import React, {useEffect} from "react";
const Categories=(props)=>{
    useEffect(()=>{
        document.title='Categories'
    })

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Category name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((item) => {
                            return (
                                <tr key={item}>
                                    <td>{item}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Categories;