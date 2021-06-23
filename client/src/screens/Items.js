import React from 'react';
import '../styles/Items.css'
import logo from '../assets/logo.jpg' 
import {addItem, getItem, deleteItem, updateItem} from  '../apis/apis'
import pencil from '../svg_icons/pencil-sharp.svg'
import eye from '../svg_icons/eye-sharp.svg'
import trash from '../svg_icons/trash-sharp.svg'
import { Button, Modal } from 'react-bootstrap';

// const { innerWidth: width, innerHeight: height } = window;

// const items = ['dsf','sdf','dsf','sdf','dsf','sdf','dsf','sdf','dsf','sdf','dsf','sdf']

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        failed: false,
        items: [],
        viewModalVisibility: false,
        viewModalItem: {},
        updateModalVisibility: false,
        updateModalItem: {}
    };
    this.submit = this.submit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showViewModal = this.showViewModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  componentDidMount(){
    this.setState({ isLoading: false ,failed: false, viewModalVisibility: false, updateModalVisibility: false, viewModalItem: {}, updateModalItem: {}  })
    getItem().then(res=>{
      res ? this.setState({ items: res.data }) : this.setState({ items: [] })
    })
  }

  componentWillUnmount(){
      this.setState({ isLoading: false ,failed: false})
  }

  showViewModal = async(item) => {
    this.setState({ viewModalVisibility: !this.state.viewModalVisibility, viewModalItem: item})
  }

  showUpdateModal = async(item) => {
    this.setState({ updateModalVisibility: !this.state.updateModalVisibility, updateModalItem: item})
  }

  submit= async(e)=>{
    await addItem({
      "title": document.forms["item_form"]["title"].value,
      "description": document.forms["item_form"]["description"].value
    }).then(res => {
      console.log(res.data[0])
    })
  }

  deleteItem = async(id)=> {
    await deleteItem(id)
    getItem().then(res=>{
      this.setState({ items: res.data });
    })
  }

  updateItem = async() => {
    updateItem({
      "id": this.state.updateModalItem.id,
      "title": document.forms["update_form"]["title"].value,
      "description": document.forms["update_form"]["description"].value
    }).then( res => {
      getItem().then(res=>{
        this.setState({ items: res.data, updateModalVisibility: !this.state.updateModalVisibility });
      })
    })
  }

  searchItem = async(e) => {
    e.preventDefault()
    await getItem({
      "search":"title",
      "value": document.forms["searchForm"]["search"].value,
      "limit": 100,
      "skip": null
    }).then(res=>{
      this.setState({ items: res.data });
    })
  }

  render(){
    return(
        <div className="body">
          <ViewModal show={this.state.viewModalVisibility} showViewModal={this.showViewModal} item={this.state.viewModalItem}/>
          <UpdateModal show={this.state.updateModalVisibility} showViewModal={this.showUpdateModal} item={this.state.updateModalItem} update={this.updateItem}/>
          <nav className="navbar navbar-light bg-light" style={{borderBottomWidth:1,borderBottomColor:'red'}}>
            <a className="navbar-brand" href="" onClick={this.onHomeClick} >
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo goes here" />
              Neutron's Link
            </a>
            <form className="form-inline" name={"searchForm"} onSubmit={this.searchItem}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>

          <div style={{margin: 50,borderWidth:1, borderColor:'red'}}>
            <Form submit={this.submit}/>
          </div>

          <hr style={{marginRight:50,marginLeft:50}}/>

          {this.state.items.map((item,index)=>
            <DivComponent key={index} item={item} deleteItem={this.deleteItem} viewItem={this.showViewModal} updateItem={this.showUpdateModal}/>
          )}

          <hr style={{marginRight:50,marginLeft:50}}/>
        </div>
    )
  }
}

function Form(props){
  return(
    <form name="item_form" onSubmit={props.submit}>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault01">Item title</label>
      <input type="text" className="form-control" name="title" id="validationDefault01" required/>
    </div>
    <div className="col-md-8 mb-3">
      <label htmlFor="validationDefault02">Item description</label>
      <input type="text" className="form-control" name="description" required/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Add Item</button>
</form>
  )
}

function DivComponent(props){
  return(
    <div className="e"  style={{padding:10,marginLeft:50,marginRight:50,display:'flex',flexDirection:'row',justifyContent:'space-between',maxWidth:'100%'}}>
      <div onClick={()=>alert(props.item)}>
        <span className="col-md-4"> {props.item.id} </span>
        <span className="col-md-4 mb-3"> {props.item.title} </span>
        <span className="col-md-4 mb-3"> { props.item.description.length < 50 ||  props.item.description == null ? props.item.description : props.item.description.substring(0,50)+'...' } </span>
      </div>
      <div>
        <span className="col-md-4 mb-3" onClick={()=>props.viewItem(props.item)}> <ion-icon className="ui" src={eye}></ion-icon></span>
        <span className="col-md-4 mb-3 span" onClick={()=>props.updateItem(props.item)}> <ion-icon src={pencil}></ion-icon> </span>
        <span className="col-md-4 mb-3" onClick={()=>props.deleteItem(props.item.id)}> <ion-icon src={trash}></ion-icon> </span>        
      </div>
    </div>
    
  )
}


function ViewModal(props) {
  return (
    <Modal show={props.show} backdrop="static" keyboard={false} >
      <Modal.Header>
        <Modal.Title> {props.item ? props.item.title :'sdfsdfsdf'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.item ? props.item.description : "I will not close if you click outside me. Don't even try to press escape key."}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.showViewModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function UpdateModal(props) {
  return (
    <Modal show={props.show} backdrop="static" keyboard={false} >
      <Modal.Header>
        <Modal.Title> Update Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form name="update_form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="text" defaultValue={props.item ? props.item.title : null} className="form-control" name="title"/>
            <small className="form-text text-muted">enter new item title.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="text" defaultValue={props.item ? props.item.description : null} className="form-control" name="description"/>
            <small className="form-text text-muted">enter new item description.</small>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.showViewModal}>
          Cancel
        </Button>
        <Button variant="success" onClick={props.update}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}