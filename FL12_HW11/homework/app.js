const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');
// Todo: your code goes here

let ul = document.createElement('ul');
rootNode.append(ul);

function render(arr, elem, attr) {
  for (let key of arr) {
    let li = document.createElement('li');
    li.setAttribute('state', 'close');
    elem.hidden = attr;
    elem.append(li);

    if (key.folder) {
      li.classList.add('folder');
      li.innerHTML = `<span><i class="material-icons">folder</i>${key.title}</span>`;
    } else {
      li.classList.add('file');
      li.innerHTML = `<span><i class="material-icons">insert_drive_file</i>${key.title}</span>`;
    }

    if (key.children) {
      let newUl = document.createElement('ul');
      li.append(newUl);
      render(key.children, newUl, true);
    }
    if (!key.children && key.children !== 'undefined') {
      let emptyLi = document.createElement('li');
      emptyLi.innerHTML = '<em empty >Folder is empty</em>';
      li.append(emptyLi);
      emptyLi.hidden = attr;
    }
  }
}
render(structure, ul, false);

document.getElementById('root').addEventListener('click', function(e) {
  let folder = e.target.closest('.folder');
  let target = e.target;
  if (!folder) {
    return;
  }
  if (
    target.parentElement.className === 'file' ||
    target.hasAttribute('empty')
  ) {
    return;
  }

  if (folder.getAttribute('state') === 'close') {
    folder.setAttribute('state', 'open');
  } else {
    folder.setAttribute('state', 'close');
  }

  let children = folder.children;

  if (folder.getAttribute('state') === 'open') {
    folder.querySelector('i').textContent = 'folder_open';
  } else {
    folder.querySelector('i').textContent = 'folder';
  }
  for (let key of children) {
    key.hidden = !key.hidden;
  }
});


