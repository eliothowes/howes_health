class FallsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        falls = Fall.new(falls_params)
        falls.date_time = DateTime.now
        falls.save
        if falls.valid?
            render json: {falls: FallSerializer.new(falls)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def falls_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
