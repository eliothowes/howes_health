class CliniciansController < ApplicationController
    skip_before_action :authorized, only: [:signup]

    def signup
        user = Clinician.create(user_params)
        if user.valid?
            token = encode_token(user_id: user.id)
            render json: { user: ClinicianSerializer.new(user), jwt: token }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:clinician).permit(:name, :username, :email, :password, :specialty)
    end

end
