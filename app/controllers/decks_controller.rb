require 'pry'
class DecksController < ApplicationController
  def index
    @user = User.find(params[:slug].split('-').last)
    @fclass = Fclass.friendly.find(params[:slug])
  end
end

