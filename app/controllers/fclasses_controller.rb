require 'pry'
class FclassesController < ApplicationController
  def create
    fclass = helpers.current_user.fclasses.build(title: params[:class_title])
    if fclass.save 
      #Popup message 
      redirect_to request.referrer
    else
      # Popup message
    end
  end
end
