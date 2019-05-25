import React,{Component} from 'react'
import './TodoApp.css'
import img from './img/chahao.jpg'
class TodoApp extends Component {
    constructor(props) {
      super(props);
      const items =[{
        value:'gf',
        complete:'incomplete'
      },{
        value:'wll',
        complete:'incomplete'
      }] ;
      this.state = {items: items,inputVal:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);     
    }
  
    render() {
      return (
        <div key={this.state.items.length}>
          <h3>TODOLISTS</h3>
          <div className='lists'>
            <ul>
              {
                this.state.items.map((items,index) => {
                  return(
                  
                    <div className='content' key={this.state.items.length}>
                      <li>{index}</li>
                      <li style={{color:'black'}} className="li_value">{items.value}<img src={img} alt="delete" className='del_pic'
                      onClick={this.handleDelete.bind(this,index)} />
                      </li>
                      <button onClick={this.handleDone.bind(this,index)} className='compl_btn'>{items.complete}</button>
                    </div>
                    
                  
                  )
                })
                
              }
            </ul>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              添加事项：
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.inputVal}

            />
            <button className='btn_add'>
              Add
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({inputVal: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.inputVal.length) {
        return;
      }
      var items = this.state.items;
      items = items.concat([{value:this.state.inputVal,complete:"incomplete"}])
      this.setState({
        items:items,
        // items:[...this.state.items.value,this.state.inputVal],
        inputVal:''
      })
      }

      handleDelete(index) { 
        const items = [...this.state.items]
        items.splice(index,1)
        this.setState({
           items:items
         });  
      }

      handleDone(index){
        var items = this.state.items;
        console.log(index);
        for(var i=0;i<items.length;i++){        
          if(i===index){
            items[i].complete = 'complete';
            break;
          }         
        }
        this.setState({items:items});
      }
    }



  

  

 export default TodoApp 
