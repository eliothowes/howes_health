class BloodPressuresController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        blood_pressure = BloodPressure.new()
        blood_pressure.systolic_value = blood_pressure_params['value'].split('/')[0]
        blood_pressure.diastolic_value = blood_pressure_params['value'].split('/')[1]
        blood_pressure.patient_id = blood_pressure_params['patient_id']
        blood_pressure.date_time = DateTime.now
        blood_pressure.save
        if blood_pressure.valid?
            render json: {blood_pressures: BloodPressureSerializer.new(blood_pressure)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def blood_pressure_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
