class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  # GET /items
  # GET /items.json
  def index
  end

  def get_items
    @items = Item.all
    render :json =>@items
  end

  def add_item
    @item = Item.create(title)
  end

  # GET /items/1
  # GET /items/1.json
  def show
  end

  # GET /items/new
  def new
    @item = Item.new
  end

  # GET /items/1/edit
  def edit
  end

  # POST /items
  # POST /items.json
  def create

  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update

  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params[:item]
    end
end
