class HeightsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        height = Height.new(height_params)
        height.date_time = DateTime.now
        height.save
        if height.valid?
            render json: {height: HeightSerializer.new(height)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def height_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
