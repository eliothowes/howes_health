class ActiveCaloriesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        active_calories = ActiveCalorie.new(active_calories_params)
        active_calories.date_time = DateTime.now
        active_calories.save
        if active_calories.valid?
            render json: {active_calories: ActiveCalorieSerializer.new(active_calories)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def active_calories_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
