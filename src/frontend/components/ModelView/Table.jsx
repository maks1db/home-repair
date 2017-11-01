import React from 'react';
import styles from './Table.scss';


const Head = (props) => (
    <thead>
        <tr>
            {
                Object.keys(props.fields).map( x => 
                    (!props.fields[x].hide && !props.fields[x].hidden) && <th key={x}>
                        {props.fields[x].title}
                    </th>
                )
            
            }
        </tr>
    </thead>
);

const Body = (props) => (
    <tbody>
        {
            props.items.data.map(x => 
                <tr key={x._id}
                    onClick={() => props.onGetItem(x._id)}
                >
                    {
                        Object.keys(props.fields).map( d => 
                            (!props.fields[d].hide && !props.fields[d].hidden) && <td key={d}>
                                {x[d]}
                            </td>
                        )
                    }    
                </tr>
            )
        }
    </tbody>
);
function total(props) {

    let result = 0;
    props.items.data.forEach(x => result += x[props.sum]);
    return result;

}

export default (props) => (
    <div className={styles.items}>
        <div className="table-responsive">
            <table className="table table-striped">
                <Head {...props} />
                <Body {...props} />
            </table>
        </div>
        {props.sum && <h5>Итого: {total(props)} руб</h5>}
    </div>

);