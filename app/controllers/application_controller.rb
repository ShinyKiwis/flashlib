require 'pry'
class ApplicationController < ActionController::Base
  before_action :check_signin
  def index
    
  end
  private
  def check_signin
    redirect_to signin_path if !helpers.current_user
  end
end
