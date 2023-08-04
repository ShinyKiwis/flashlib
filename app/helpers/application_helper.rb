module ApplicationHelper
  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def active_fclass?(fclass_title)
    "#{fclass_title.downcase}-#{current_user.id}" == params[:slug]
  end
end
