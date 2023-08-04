require 'pry'
class DecksController < ApplicationController
  def index
    @user = helpers.current_user
    @fclass = Fclass.friendly.find(params[:slug])
  end
end

