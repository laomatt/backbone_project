var Item = Backbone.Model.extend({
  defaults: {
    title:"empty spot",
    completed:false
  },
  checkOff:function(){
    this.set({completed:true});
    // this.save();
  }
})

var ItemView=Backbone.View.extend({
  template:_.template('<div class="matt"> <%= title %>--  <a class="not_done" href="#">done</a></div>'),
  events: {'click a':'check'},
  render: function(){
    if(this.model.get('completed'))
    {
      var html = '<div class="matt done">'+this.model.get('title')+'  --  </div>'
    }
   else
    {
      var html = '<div class="matt">'+this.model.get('title')+'  --  <a href="#">done</a></div>'
    }
    this.$el.html(html);
  },
  check: function(){
    this.model.checkOff();
    this.render();
  },
})

var ItemList = Backbone.Collection.extend({
  model: Item,
  url: '/items/get_items'
});


var ItemViewList=Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this)
  },
  addOne: function(item){
    var viewItem= new ItemView({model:item});
    viewItem.render()
    this.$el.append(viewItem.el);
    $('#item-list').append(viewItem.el)
  }
})


var list = new ItemList();
list.fetch()

var viewList = new ItemViewList({collection: list})
viewList.render()


$(document).on("page:change", function(){

  $('body').on('submit', '.add-item-form', function(event) {
    event.preventDefault();
    viewList.addOne(new Item({title:$( "input[name='title']" ).val()}))
    $(this).trigger('reset')
  });
})

