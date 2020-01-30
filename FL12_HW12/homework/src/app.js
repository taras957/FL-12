const set = {
    construct: function(){
      this.selectElements();
      this.redirectAddPage();
      this.bindAddnewSetBtns();
      this.loadFromStorage();
    },
  selectElements: function () {
    this.chache = [];
    this.mainPage = document.querySelector("#main-page");
    this.modifyPage = document.querySelector(".modify");
    this.modifyName = document.querySelector('.modify-name');
    this.modifyFields = document.querySelector(".modify-fields");
    this.modifyBtn = document.querySelector(".modify-buttons").children;
    this.addSetBtn = document.querySelector(".add-new-set");
    this.addSetSection = document.querySelector('.addSet');
    this.inputName = document.querySelector('#name');
    this.addTerms = document.querySelector(".add-terms");
    this.root = document.querySelector('#root');
    this.sets = document.querySelector("#sets");
    this.setsList = document.querySelector("#sets-list");
    this.setsListChildren = this.setsList.children;
  },
  redirectAddPage: function() {
    this.addSetBtn.onclick = () => {
      window.location.href = '#/add_new-set';
      this.mainPage.style.display = 'none';
      this.addSetSection.style.display = 'block';
  };
  },
  redirectMainPage: function(){
       window.location.href = "#/main_page";
       this.mainPage.style.display = "block";
       this.addSetSection.style.display = "none";
  },
  redirectModifypage:function(id) {
    window.location.href = `#/modify:item/id_${id}_modPage`;
    this.mainPage.style.display = "none";
    this.modifyPage.style.display = "block";
  },
  error: function(arg) {
       let errBlock = document.querySelector(".tooltip");
    if(arg){
     errBlock.style.display = "block";
    }else {
     errBlock.style.display = "none"; 
    }
 

  },
  buildSet: function() {

    let termItem = document.createElement('div');
    let term = document.createElement("input");
    let descr = document.createElement("input");
    let remove = document.createElement("button");
    termItem.setAttribute('class', 'term-item');
    term.setAttribute('id', 'term');
    term.setAttribute('placeholder', 'Enter term');
    descr.setAttribute("id", "descr");
    descr.setAttribute("placeholder", "Enter definition");
    remove.textContent = 'clear fields';
    termItem.append(term);
    termItem.append(descr);
    termItem.append(remove);
    this.sets.prepend(termItem);

  },
  taskSetUpBtn: function() {
    let addMoreFields = document.createElement("button");
    let saveBtn = document.createElement("button");
    let cancelBtn = document.createElement("button");
    let termItem = document.querySelector('.term-item');
    saveBtn.textContent = "Save";
    cancelBtn.textContent = "Cancel";
    cancelBtn.dataset.save = "false";
    saveBtn.dataset.save = "true";
    addMoreFields.textContent = "Add more fields";
    addMoreFields.setAttribute("class", "addMoreFields");
    this.sets.append(addMoreFields);
    this.sets.append(saveBtn);
   this.sets.append(cancelBtn);
  },
  bindAddnewSetBtns: function() {
    this.addTerms.onclick = () => {
    if (!this.inputName.value) {
        this.error(true);
        return;
      }else{
        this.error(false)
      }
      this.buildSet();
      this.taskSetUpBtn();
      this.bindTaskSetUpBtn();
      this.addTerms.onclick = null;
    };
    
  },
  bindTaskSetUpBtn: function () {
    let fields = document.querySelector('.addMoreFields');
    let cancelBtn = this.sets.querySelector('button[data-save = "false"]');
    let saveBtn = this.sets.querySelector('button[data-save = "true"]');
    fields.onclick =  this.buildSet.bind(this);
    
    saveBtn.onclick = () => { this.saveInfo()}
    cancelBtn.onclick = () => {this.redirectMainPage()}
  },
  saveInfo: function() {
    let termItems = this.sets.getElementsByClassName('term-item');
    const info = {
      name: this.inputName.value,
      learned: 'false',
      id:0,
      data:{},
    }
    for (let item of Array.from(termItems)) {
      let inputs = item.querySelectorAll("input"); 
      info.data[inputs[0].value] = inputs[1].value;
    }
    this.randomId(info);
    this.chache.push(info);
    this.saveToLocalStorage();
    this.setListOutput(this.inputName.value,info.id);
  },
  saveToLocalStorage: function() {
    for( let item of this.chache) {
      JSON.stringify(item);
    }
    localStorage.setItem('listOfSets', JSON.stringify(this.chache))
    
  },
  loadFromStorage: function() {
   let data = JSON.parse(localStorage.getItem('listOfSets'));

   
   if(data !== null){
     this.chache.push(...data); 
     for ( let key of this.chache) {
      this.setListOutput(key.name, key.id);
     }
   }else{
     this.chache = [];
   }
    
  },
  setListOutput: function(name = this.inputName.value,id) {
      let li = document.createElement("li");
      let span = document.createElement('span');
      let check = document.createElement("input");
      let deleteBtn = document.createElement('button');
      let editBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'delete-list-item');
      editBtn.setAttribute('class', 'modify-list-item');
      deleteBtn.textContent = 'Delete';
      editBtn.textContent = "Edit";
      check.setAttribute("type", "checkbox");
      li.setAttribute("class", "set-list-item");
      li.dataset.serial= id;
      let text = document.createTextNode(name);
      span.append(text);
      li.append(check);
      li.append(span);
      li.append(editBtn);
      li.append(deleteBtn);
      this.setsList.append(li);
    this.redirectMainPage();
    this.clear();
    this.bindSetLitemBtn();
},
clear: function() {
 this.inputName.value = null;
//  Array.from(this.sets.children).map(el => el.remove());
},
bindSetLitemBtn: function() {
  let liItem , checkbox, deletebtn;

  for( let i = 0; i< this.setsListChildren.length; i++ ){
      liItem = this.setsListChildren[i];
      checkbox = liItem.firstElementChild;
      deletebtn = liItem.querySelector('.delete-list-item');
      editBtn = liItem.querySelector(".modify-list-item");

      deletebtn.onclick = this.deleteLi.bind(this, liItem);
      checkbox.onclick = this.learned.bind(this, checkbox, liItem)
      editBtn.onclick = () =>{
        this.redirectModifypage(liItem.dataset.serial);
        this.modifyoutput(liItem);
      };
  }
},
deleteLi: function(el) {
  let index;
  let name = el.querySelector("span").textContent;
  this.chache.map( (item) => {
    if( item.name == name){
     index = this.chache.indexOf(item);
     this.chache.splice(index ,1);
    }
  } )
  this.saveToLocalStorage();
  el.remove();
},
learned: function(checkbox,el) {
  let name = el.querySelector('span').textContent;
  if(checkbox.checked){
    el.remove();
    el.classList.add('learned');
    this.chache.map( (i)=> {
      if (i.name == name){
        i.learned = "true";
      }
    } )
    this.setsList.append(el);
    checkbox.removeAttribute('checked');
  }else{
    el.remove();
    el.classList.remove("learned");
    this.chache.map(i => {
      if (i.name == name) {
        i.learned = "false";
      }
    });
    this.setsList.prepend(el);
   }
  
},
modifyoutput: function(el) {
  let currentEl, inputTerm, modifyItem, inputDefinition;
  let id = el.dataset.serial;
  this.chache.map((element) => {
    if(element.id == id){currentEl = element;}})
  this.modifyName.value = currentEl.name;
  Object.entries(currentEl.data).map( (key) => {
      modifyItem = document.createElement('div');
      modifyItem.classList.add("modify-item");
      inputTerm = document.createElement('input');
      inputDefinition = document.createElement('input');
      inputTerm.value = key[0];
      inputDefinition.value = key[1];
      modifyItem.append(inputTerm);
      modifyItem.append(inputDefinition);
      this.modifyFields.append(modifyItem);
  } );
  this.scanModifyBtn(id);
},
scanModifyBtn: function(id) {
let save = this.modifyBtn[0];
let cancel = this.modifyBtn[1];

 save.onclick = ()=> { 
   this.saveModify(id);
    window.location.href = "#/main_page";
    this.mainPage.style.display = "block";
    this.modifyPage.style.display = "none";
    Array.from(this.modifyFields.children).map(el => el.remove());
  };
 cancel.onclick = () => {
    window.location.href = "#/main_page";
    this.mainPage.style.display = "block";
    this.modifyPage.style.display = "none";
    Array.from(this.modifyFields.children).map(el => el.remove());};
},
saveModify: function(id) {
  let buffer = {}
  let modifyItem = this.modifyFields.querySelectorAll('.modify-item');
  Array.from(modifyItem).map( (el)=> {
    buffer[el.children[0].value] = el.children[1].value;
   } )
   this.chache.map( el => { 
     if(el.id == id){
       el.data = buffer;
     }
   })
   this.saveToLocalStorage();

},
randomId: function(objInfo) {
 let random = Math.floor(Math.random() *1000);
  this.chache.map((el) => {
    if(el.id == random) {
      this.randomId();
    }else {
       objInfo.id = random;
    }
  })
  
}
}

window.onload = set.construct();