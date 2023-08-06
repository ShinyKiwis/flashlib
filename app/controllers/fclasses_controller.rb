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

  def update
    fclass = Fclass.friendly.find(params[:id])
    fclass.class_img = params[:fclass][:class_img]
    fclass.save
    redirect_to request.referrer
  end

  private
  def fclass_params
    params.require(:fclass).permit(:title)
  end
end
