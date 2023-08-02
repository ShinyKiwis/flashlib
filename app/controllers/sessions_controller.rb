class SessionsController < ApplicationController
  before_action :check_signin

  def new
      
  end

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to dashboard_path(user.id)
    else
      flash[:alert] = "Invalid username or password!"
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    
  end
  private
  def check_signin
    return redirect_to dashboard_path(helpers.current_user.id) if helpers.current_user
  end
end
