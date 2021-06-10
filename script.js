
var app = new function() {
  this.el = document.getElementById('tasks');

  this.tasks = [];

  
  
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-outline-warning">Edit</button></td>'; //btn btn-xxx 'xxx'에 문자열을 입력할시 버튼 색을 바꿔줌 bootstrap 이용.
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-outline-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-todo');
    // 값 받아 오기
    var task = el.value;

    if (task) {
      // 새로운 값 입력 받기.
      this.tasks.push(task.trim());
      // 받은 입력값 리셋
      el.value = '';
      // 디스플레이 새로운 리스트
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    // 디스플레이 값 필드
    el.value = this.tasks[item];
    // 디스플레이 필드
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // 값을 받기
      var task = el.value;

      if (task) {
        // 값 수정
        self.tasks.splice(item, 1, task.trim());
        // 디스플레이 새로운 리스트
        self.FetchAll();
        // 필드 숨기기
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // 현재 행 삭제
    this.tasks.splice(item, 1);
    // 디스플레이 새로운 리스트
    this.FetchAll();
  };

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = '개의 목록이 있습니다.';

    if (data) {
        if(data ==1){
            name = '개의 목록이 있습니다.'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = '0 ' + name;
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}
